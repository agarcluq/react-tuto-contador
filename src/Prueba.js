import React, { useState } from "react";
const Prueba = () =>{
  const [count,setCount]= useState(0);
  return(
    <div>
    <p>You click {count}</p>
    <button onClick={() => setCount(count+1)}>
    click me
    </button>
    </div>
  )
}
export default Prueba;