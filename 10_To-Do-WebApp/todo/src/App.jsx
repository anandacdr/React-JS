import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="text-3xl">
      <h1>TO-DO-Application</h1>
      
      <input type="text"
      className='text-2xl'
      placeholder='Enter Name'
      
      />
      </div>
      <input type="number"
      className='text-2xl'
      placeholder='Enter Number'
      
      />
      </div>
    </>
  )
}

export default App
