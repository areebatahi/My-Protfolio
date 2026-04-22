import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from "./components/Services"

function App() {

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} />
     
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
