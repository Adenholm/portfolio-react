import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import ScrollingBg from './components/ScrollingBg'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <ScrollingBg/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
