import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import FlowerPage from './pages/projects/FlowerPage'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/projects/flower" element={<FlowerPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
