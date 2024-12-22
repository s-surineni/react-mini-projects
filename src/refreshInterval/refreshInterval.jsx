import { useState } from "react"
import "./style.css"
import ShowPicture from "../ShowPicture/ShowPicture";
export default function RefreshInterval() {
    const [interval, setInterval] = useState(0);
    const setFetchDataInterval = (value) => {
        setInterval(value);

    }

    return (
        <>
            <ShowPicture interval={interval} />
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

        </>
    )
}