import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h2 className='bg-gray-600 text-center'>CONTEXT API | React</h2>

      <Login />
      <Profile />
    
    </UserContextProvider>
  )
}

export default App
