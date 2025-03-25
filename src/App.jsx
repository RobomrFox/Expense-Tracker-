import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Topbar from './components/Topbar';
import AddCategory from './components/AddCategory';

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
