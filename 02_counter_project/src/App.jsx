import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  let [warning, setWarning] = useState('');

  // let counter = 14

  // Add Value - Function
  const addValue = () => {
    if (counter < 20){
      console.log("Clicked to Add");
      counter = counter + 1;                               
      setWarning('');
      setCounter(counter)

      // callback in setCounter
      // setCounter( (prevCounter) => prevCounter + 4)
    }
    if (counter === 20){
      setWarning(`Warning: Counter is at Maximum Value of 20`)
    }


    // console.log("Clicked to Add");
    // counter = counter + 1

    // setCounter(counter)

    // console.log(counter)
  }

  // Remove Value - Function
  const removeValue = () => {

    if (counter > 0){
      console.log("Click to Remove")
      setCounter(counter - 1)
      // callback in setCounter
      // setCounter( (removeCounter) => removeCounter - 4)
      setWarning('');
    }
    if (counter === 1){
      setWarning(`Warning: Counter is at Minimum Value of 0`)
    }

  };
  return (
    <>
      <h1>Counter Project</h1>

      <h2>Counter Value: {counter}</h2>

      {warning && <p className='warning'>{warning}</p>}

      <button onClick={addValue}>Add Value</button>
      
      <button onClick={removeValue}>Remove Value</button>


        
    </>
  )
}

export default App
