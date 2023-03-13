import React from "react";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(4);

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App
