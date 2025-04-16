import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className='section_title'>About Me</h2>
      <div className='about_container grid'>
        <div className="about_data">
          <div className="about_info">
            <p className='about_description'>
            "I’m a DevOps Engineer based in Manila with extensive experience in IT operations (Ops), playing a key role in the deployment, monitoring, and maintenance of software systems and infrastructure. Additionally, I have good familiarity with building front-end and full-stack websites."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
