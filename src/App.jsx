import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route path ='/L' element={<Login/>}/>
          <Route path ='/S' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
