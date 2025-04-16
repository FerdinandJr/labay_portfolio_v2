import React from 'react'
import TechStack from './TechStack'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skills container section' id="skills">
        <h2 className='section_title'>Tools & Technologies</h2>
        <div className='skills_container grid'>
            {TechStack.map((val) => (
                <div key={val.id} className='skills_card'>
                <h3 className='skills_title'>{val.title}</h3>
                {val.logo && val.logo.map((icon, index) => (
                    <i key={index} className={`${icon} colored techlogo`}></i>
                ))}

                {/* Render descriptions */}
                {val.description && Array.isArray(val.description) ? (
                    val.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))
                ) : (
                    <p>{val.description}</p> // If description is just a single string
                )}
            </div>
            ))}
        </div>
    </section>
  )
}

export default Skills;