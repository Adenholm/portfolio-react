import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import ScrollingBg from './components/ScrollingBg'

function App() {

  return (
    <>
      <Navbar/>
      <ScrollingBg/>
      <Home/>
    </>
  )
}

export default App
