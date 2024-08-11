// import { useState } from 'react'
import Home from './Component/Home'
import Navbar from './Component/Nav'
import About from './Component/About'
import Teams from './Component/Teams'
import Services from './Component/Services'
import Section from './Component/Section.tsx'
import Blog from './Component/Blog.tsx'
import Footer from './Component/Footer.tsx'
import './index.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Teams/>
      <Services/>
      <Section/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
