export default function RenderOrder() {
    console.log('ironman App')
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