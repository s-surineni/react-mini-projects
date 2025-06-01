import { useState } from "react";


export default function App({}) {
  const [quantity, setQuantity] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const onUpdateQuantity = async newQuantity => {
    // Manually set the isPending State.
    setIsPending(true);
    const savedQuantity = await updateQuantity(newQuantity);
    setIsPending(false);
    setQuantity(savedQuantity);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Item onUpdateQuantity={onUpdateQuantity}/>
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  );
}

function Item({onUpdateQuantity}) {
    function handleChange(event) {
      onUpdateQuantity(event.target.value);
    }
    return (
      <div className="item">
        <span>Eras Tour Tickets</span>
        <label htmlFor="name">Quantity: </label>
        <input
          type="number"
          onChange={handleChange}
          defaultValue={1}
          min={1}
        />
      </div>
    )
  }
  

  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  
function Total({quantity, isPending}) {
    return (
      <div className="total">
        <span>Total:</span>
        <span>
          {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
        </span>
      </div>
    )
  }
  

async function updateQuantity(newQuantity) {
    return new Promise((resolve, reject) => {
      // Simulate a slow network request.
      setTimeout(() => {
        resolve(newQuantity);
      }, 2000);
    });
  }
  