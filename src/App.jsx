import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0);


  console.log("Is App rendering? ")

  return (
    <>
      <Navigation />
      <Sidebar />
    </>
  )
}

export default App
