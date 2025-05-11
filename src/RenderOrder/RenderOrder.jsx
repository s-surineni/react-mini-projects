import { useEffect, useState } from "react";

export default function RenderOrder() {
    const [val, setVal] = useState(0);
    useEffect(() => {
        setVal(val + 1);
    }, []);
    console.log('ironman App', val)
    return (<div>Render Order
        <A />
        <C />
    </div>)
}

function A() {
    console.log('ironman A');
    return <B />
}

function B() {
    console.log('Ironman B');
    return <div>B</div>
}

function C() {
    console.log('Ironman C');
    return <div>C</div>
}