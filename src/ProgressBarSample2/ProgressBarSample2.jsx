import  { useState, useEffect } from "react";
import ProgressBar2 from "../ProgressBar2/ProgressBar2";
// https://github.com/KaterinaLupacheva/simple-progress-bar
function ProgressBarSample2() {
    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
      ];
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <div className="App">
          {testData.map((item, idx) => (
            <ProgressBar2 key={idx} bgcolor={item.bgcolor} completed={completed} />
          ))}
        </div>
      );
}

export default ProgressBarSample2;