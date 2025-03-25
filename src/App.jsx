import './App.css'
import Sidebar from './components/Sidebar'

import Navigation from './components/Navigation'
import Topbar from './components/Topbar';
import AddCategory from './components/AddCategory';

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, homeLoader } from './pages/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader
  },
  // {
  //   path: "/Categories",
  //   element: <h1>Categories</h1>,
  // }
])


function App() {

  return (
    <>
    <div className='flex h-screen'>
      <Sidebar/>
      <Topbar/>
      <div className='main-content flex-grow'>

      </div>
    </div>
     
    </>
  )
}

export default App;
