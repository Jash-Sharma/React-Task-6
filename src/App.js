import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js'
import Home from "./components/Home.js"
import About from "./components/About.js"
import Project from "./components/Project.js"
import Contact from "./components/Contact.js";
import React from 'react'
import "./App.css"

function App() {
  return (
    <div className='main-body'>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
