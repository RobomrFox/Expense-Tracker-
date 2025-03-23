import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Register from './components/Register'
import Topbar from './components/Topbar'
import ExpenseRecords from './components/ExpenseRecords'
import AddExpense from './components/AddExpense'
import AddCategory from './components/AddCategory'
import DeleteCategory from './components/DeleteCategory'

function App() {
  const [count, setCount] = useState(0);


  console.log("Is App rendering? ")

  return (
    <div>
      <Topbar/>
      <ExpenseRecords/>
      <Sidebar/>
    </div>
  )
}

export default App
