import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <i class="fa-regular fa-circle-dot dot"></i>
        <span className='timeline_date'>{props.year}</span>
        <h3 className='timeline_title'>{props.title}</h3>
        <p className='timeline_text'>{props.description}</p>
    </div>
  )
}

export default Card;