import React from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Contact from './components/Contact'
import { HoverImageLinks } from './components/HoerLink'
import { About } from './components/About'
import ProjectCard from './components/CardSwip'

function App() {

  return(
    <div className="App">
      <NavBar />
      <About />
      <ProjectCard />
      <Contact />
      {/* <HoverImageLinks /> */}
    </div>
  )
}

export default App
