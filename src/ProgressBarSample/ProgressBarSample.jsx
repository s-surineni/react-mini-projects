import ProgressBar from "../ProgressBar/ProgressBar"
import { useEffect, useState } from "react";

const ProgressBarSample = () => {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);
    return <ProgressBar completed={completed}></ProgressBar>
}

export default ProgressBarSample;