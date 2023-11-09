import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]=useState(10)
  const addValue = () =>{
   setCounter(counter+5)
  }

  const removeValue = () =>{
    setCounter(counter-5)
  }
  return (
    <>
     <h1 className="text-5xl font-bold underline">
      Started React with counter method!
    </h1>
    <center>
      <h2 className="font-bold text-4xl">Counert is {counter}</h2>
      <button className="text-4xl bg-balck" onClick={addValue}> Add the Counter Value {counter} </button>
      <br />
      <button className="text-4xl" onClick={removeValue}>Remove The counter value {counter} </button>
    </center>
    </>
  )
}

export default App
