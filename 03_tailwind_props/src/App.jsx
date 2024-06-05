import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ananda",
    age: 20
    
  }

  let newArr = [1,2,43]

  return (
    <>
      <h1 className='p-4 bg-black rounded-xl text-cyan-400'>Testing the TailwindCSS</h1 >
      <Card username="anandacdr" btnText = "click me" />
      <Card channel="anandacdr" btnText = "click me" />
      
    </>
  )
}

export default App
