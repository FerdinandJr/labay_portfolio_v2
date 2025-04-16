import React from 'react';
import Data from './Data';
import Card from './Card';
import './Experience.css'

const Experience = () => {
  return (
    <section className='resume container section' id='experiences'>
        <h2 className='section_title'>Experience & Education</h2>
            <div className='timeline grid'>
                {Data.map((val,id) => (
                    <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    description={val.description}/>
                ))}
            </div>
    </section>
  )
};

export default Experience;