import React from 'react'
import './Home.css'
import Profile from '../../assets/profile1.png'
import Arrow from './Arrow'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        <img src={Profile} alt="" className='home_img'/>
        <h1 className='home_name'>Ferdinand Labay</h1>
        <span className='home_title'>DevOps Engineer</span>
        <a href="#contact" className='btn'>View Resume</a> 
        <Arrow/>
      </div>  
  </section>
  )
};

export default Home;