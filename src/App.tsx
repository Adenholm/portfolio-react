import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/home/Home'
import './styles/scrolling.css'
import Footer from './layout/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import FlowerPage from './pages/projects/FlowerPage'
import RecipesPage from './pages/projects/RecipesPage'
import QuackTalesPage from './pages/projects/QuackTalesPage'
import RentAToyPage from './pages/projects/RentAToyPage'
import CohortPage from './pages/projects/CohortPage'
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
  window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar/>
      <div className="overflow-scroll fixed h-[calc(100vh-4rem)] w-full z-[1]">
        <main className='min-h-[calc(100vh-18rem)]'>
          <Routes>
            <Route path="/projects/flower" element={<FlowerPage />} />
            <Route path="/projects/recipes" element={<RecipesPage />} />
            <Route path="/projects/quack-tales" element={<QuackTalesPage />} />
            <Route path="/projects/rent-a-toy" element={<RentAToyPage />} />
            <Route path="/projects/cohort-manager" element={<CohortPage />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
