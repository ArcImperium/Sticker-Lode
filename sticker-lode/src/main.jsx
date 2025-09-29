import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculator from './Calculator.jsx'
import Home from './Home.jsx'
import ToDo from './ToDo.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
