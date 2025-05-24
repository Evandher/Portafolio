import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Boot from './pages/Boot.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'

import BotChat from './components/BotChat.jsx'

import './index.css'
import './styles/neon.css'

function LayoutWrapper() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Boot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <BotChat />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  </React.StrictMode>
)
