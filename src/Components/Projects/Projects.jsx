import React from 'react'
import './Projects.css'
import List from './List.jsx'


const Projects = () => {
  return (
    <section className='projects container section' id="projects">
      <h2 className='section_title'>Recent Work</h2>
      <div className='logo_container'>
        <a href="">
        <span className="logo_text">Explore Repository on GitHub</span>
          <i class="fa-brands fa-github gh_logo"></i>
        </a>
      </div>
      <div className="projects_container grid">
        {List.map((item) => (
        <div className="projects_card">
            <div className="projects_logo_container">
              {item.logo && item.logo.map((icon, index) => (
                <i key={index} className={`${icon} colored projects_logo`}></i>
              ))}
            </div>
            <div key={item.id} >
                <a href=""><img src={item.image} alt="" className="projects_img" /></a>
            </div>
                <h3 className='projects_title'>{item.title}</h3>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;