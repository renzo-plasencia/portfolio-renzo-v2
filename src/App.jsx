import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import Project from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/portfolio-renzo-v2" element={<Home />} />
        <Route path="/portfolio-renzo-v2/proyectos" element={<Project />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
