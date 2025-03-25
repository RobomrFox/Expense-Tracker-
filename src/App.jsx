import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Topbar from './components/Topbar';

function App() {

  return (
    <>
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='main-content flex-grow'>
        <Topbar/>
      </div>
    </div>
     
    </>
  )
}

export default App;
