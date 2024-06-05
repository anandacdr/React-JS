import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 14

  // Add Value - Function
  const addValue = () => {
    console.log("Clicked to Add");
    counter = counter + 1

    setCounter(counter)

    console.log(counter)
  }

  // Remove Value - Function
  const removeValue = () => {
    console.log("Click to Remove")
    setCounter(counter - 1)

  }
  return (
    <>
      <h1>Counter Project</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      
      <button onClick={removeValue}>Remove Value</button>
        
    </>
  )
}

export default App
