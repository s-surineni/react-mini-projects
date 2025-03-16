import  { useState, useEffect } from "react";
import ProgressBar2 from "../ProgressBar2/ProgressBar2";

function ProgressBarSample2() {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <div className="App">
            <ProgressBar2 bgcolor={"#6a1b9a"} completed={completed} />
        </div>
    );
}

export default ProgressBarSample2;