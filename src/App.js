import React, { useState, useRef } from "react";
import "./App.css";
import Head from "./Header";
import Header from "./components/Header";
import bird from "./bird.png";
function Logo(){
  const lo = <img src={bird} />
  return lo;
}

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    resetInput();
  }
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    resetInput();
  }
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    resetInput();
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    resetInput();
  }
  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult() {
    setResult(0);
    resetInput();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
      <Logo />
    </div>
  );
}
export default App;
