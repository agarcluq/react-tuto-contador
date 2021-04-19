import React, { useState, useEffect } from "react";
import "./style.css";
import Prueba from "./Prueba";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello word");

  useEffect(() => {
    console.log('here')
    document.title = `You clicked ${count} times`;
  },[count]);
  return (
    <div>
      <p>{text}</p>
      <input onChange={ev => setText(ev.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button>

    </div>
  );
}
