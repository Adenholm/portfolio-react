import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import ScrollingBg from './components/ScrollingBg'
import Footer from './layout/Footer'

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
