import { useEffect, useState, useRef } from "react"
import "./style.css"
export default function RefreshInterval() {
    const [data, setData] = useState(null);
    const [trigger, setTrigger] = useState(0);
    const fetchDataInterval = useRef();
    const setFetchDataInterval = (value) => {
        if (fetchDataInterval.current) {
            clearInterval(fetchDataInterval.current);
            fetchDataInterval.current = null;
        }
        if (value > 0) {
            fetchDataInterval.current = setInterval(() => {
                setTrigger(Date.now());
            }, value);
        }
    }
    useEffect(() => {
        fetch('https://random.dog/woof.json')
            .then(async res => {
                const response = await res.json();
                console.log(response)
                setData((response))
            })
            .catch(err => console.warn(err));

                // Clean up for unmount to prevent memory leak
            return () => clearInterval(fetchDataInterval.current);
    }, [trigger]);
    return (
        <>
            <h1>Refresh Interval</h1>
            <div>
                <select defaultValue="0" onChange={(e) => setFetchDataInterval(Number(e.target.value))}>
                    <option value="0">Auto Refresh: OFF</option>
                    <option value="5000">5 seconds</option>
                    <option value="15000">15 seconds</option>
                    <option value="30000">30 seconds</option >
                    <option value="60000">1 minute</option>
                </select >
            </div >
            <img className="dog-image" src={data && data.url} alt="dog image" />
        </>
    )
}