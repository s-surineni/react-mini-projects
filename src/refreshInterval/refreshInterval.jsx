import { useEffect, useState } from "react"

export function RefreshInterval() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://random.dog/woof.json')
            .then(async res => {
                const response = await res.json();
                console.log(response)
                setData((response))
            })
            .catch(err => console.console.warn(err));
    }, []);
    return (
        <>
            <h1>Refresh Interval</h1>
            <img className="dog-image" src={data && data.url} alt="dog image" />
        </>
    )
}