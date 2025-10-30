import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import FlowerPage from './pages/projects/FlowerPage'
import RecipesPage from './pages/projects/RecipesPage'
import QuackTalesPage from './pages/projects/QuackTalesPage'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/projects/flower" element={<FlowerPage />} />
        <Route path="/projects/recipes" element={<RecipesPage />} />
        <Route path="/projects/quack-tales" element={<QuackTalesPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
