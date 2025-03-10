import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar/>
      <div className='bg-[url(assets\images\background.png)] bg-cover h-screen fixed top-0 left-0 w-full z-[-1]'>
      </div>
      <Home/>
    </>
  )
}

export default App
