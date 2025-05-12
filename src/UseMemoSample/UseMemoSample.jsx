import  { useState, useMemo } from "react";

function SumCalculator() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [input, setInput] = useState("");
    const [dummy, setDummy] = useState(0);

    // useMemo will only recalculate the sum if 'numbers' changes
    const sum = useMemo(() => {
        console.log("Calculating sum...");
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    const sum2 = () => {
        console.log("Calculating sum2...");
        return numbers.reduce((acc, num) => acc + num, 0);
    };

    const addNumber = () => {
        const num = parseInt(input, 10);
        if (!isNaN(num)) {
            setNumbers([...numbers, num]);
            setInput("");
        }
    };

    const forceRerender = () => setDummy(dummy + 1);

    return (
        <div>
            <h2>Numbers: {numbers.join(", ")}</h2>
            <h3>Sum: {sum}</h3>
            <h3>Sum2: {sum2()}</h3>
            <input
                type="number"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a number"
            />
            <button onClick={addNumber}>Add</button>
            <button onClick={forceRerender}>Force Re-render</button>
        </div>
    );
}

export default SumCalculator;
