import { useState } from 'react'


function App() {
  // let counter = 1;
  let [counter,setCounter] = useState(5)
  
  const addValue = () => {
    setCounter(counter + 1);
   
  }
  const subValue = () => {
    setCounter(counter - 1 );
  }

  return (
    <>
      <h1>Counter Code</h1>
      <h4>Counter Value:{counter} </h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <button onClick={addValue}>+</button>
      <button onClick = {subValue}>-</button>
    </div>
    </>
  )
}

export default App
