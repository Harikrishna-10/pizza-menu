import React from 'react'

const Skill = (props) => {
  return (
    <div className='skill-item'>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
    </div>
  )
}
export default Skill;
