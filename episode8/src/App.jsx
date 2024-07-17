import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCount } from "./useCount";

function App() {
  const { increase, decrease, setZero, count } = useCount();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Set Zero</button>
    </div>
  );
}

export default App;
