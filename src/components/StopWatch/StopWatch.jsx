import { useState } from "react";
import "./styles.css";

const StopwatchTimer = ({ children }) => (
  <h1 data-testid="stop_watch_timer">{children}</h1>
);
const StartButton = (props) => (
  <button type="button" data-testid="start_button" onClick={props.startTimer}>
    {props.isRunning ? "Pause" : "Start"}
  </button>
);
const PauseButton = (props) => (
  <button type="button" data-testid="pause_button" onClick={props.pauseTimer}>
    Pause
  </button>
);
const ResetButton = (props) => (
  <button type="button" data-testid="reset_button" onClick={props.resetTimer}>
    Reset
  </button>
);

export default function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  
  function formatTime() {
    const totalMilliseconds = time;
    const minutes = Math.floor(totalMilliseconds / (60 * 1000));
    const seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);
    const milliseconds = totalMilliseconds % 1000;
    
    // Format: MM:ss:mm (minutes:seconds:milliseconds)
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMilliseconds = Math.floor(milliseconds / 10).toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }
  
  function startTimer() {
    if (!isRunning) {
      const intrId = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms for better precision
      }, 10);
      setIntervalId(intrId);
      setIsRunning(true);
    } else {
      pauseTimer();
    }
  }
  
  function pauseTimer() {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsRunning(false);
  }
  
  function resetTimer() {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
    setIsRunning(false);
  }
  
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <StopwatchTimer>{formatTime()}</StopwatchTimer>
      <StartButton startTimer={startTimer} isRunning={isRunning} />
      <ResetButton resetTimer={resetTimer} />
    </div>
  );
}
