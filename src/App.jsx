import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import React, { useState, useEffect } from 'react';
import infinity from "./assets/infinity-infinity-sign.gif"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after data is fetched
    }, 2000); // 3 seconds delay to simulate loading
  }, []);

  return (
    
    <>
      {/* Conditionally render content based on isLoading */}
      {isLoading ? (
        <div className='infinityloop'>
          {/* This will be empty or you can put a custom loading message */}
          <img src={infinity} alt="infinity_loop" /> {/* You can replace this with any loading animation or message */}
        </div>
      ) : (
        <>
          {/* Render all components when loading is complete */}
          <Menu />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Blogs />
          <Projects />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
