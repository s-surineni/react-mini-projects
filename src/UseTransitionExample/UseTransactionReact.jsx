import { useState, useTransition } from "react";
import { startTransition } from "react";

export default function App({}) {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const updateQuantityAction = async newQuantity => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  // New function that updates quantity without useTransition
  const updateQuantityWithoutTransition = async (newQuantity) => {
    setIsLoading(true);
    try {
      const savedQuantity = await updateQuantity(newQuantity);
      setQuantity(savedQuantity);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {/* <Item action={updateQuantityAction}/> */}
      <Item action={updateQuantityWithoutTransition}/>
      <hr />
      <Total quantity={quantity} isPending={isPending || isLoading} />
    </div>
  );
}
function Item({action}) {
  function handleChange(event) {
    action(event.target.value);
  }

  // function handleChange(event) {
  //   // To expose an action prop, await the callback in startTransition.
  //   startTransition(async () => {
  //     await action(event.target.value);
  //   })
  // }
  
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

  function updateQuantity(newQuantity) {
    return new Promise((resolve, reject) => {
      // Simulate a slow network request.
      setTimeout(() => {
        resolve(newQuantity);
      }, 5000);
    });
  }

