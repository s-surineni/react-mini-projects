import { useEffect, useState } from "react"

function ShowPicture({ interval }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getImage = () => {
            fetch('https://random.dog/woof.json')
                .then(async res => {
                    const response = await res.json();
                    console.log(response)
                    setData((response))
                })
                .catch(err => console.warn(err));
        }
        let fetchDataInterval;
        if (interval > 0) {
            fetchDataInterval = setInterval(() => {
                getImage();
            }, interval);
        }
        // Clean up for unmount to prevent memory leak
        return () => {
            clearInterval(fetchDataInterval);
        };
    }, [interval]);
    return (
        <img className="dog-image" src={data && data.url} alt="dog image" />
    )
}

export default ShowPicture