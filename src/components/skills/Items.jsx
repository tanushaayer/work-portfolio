import React from 'react'
import "./skills.css"

const Items = ({skills}) => {
    return (
        <>
    {skills.map((skill) => {
        const {id, name, percentage, description} = skill
        return(
            <div className='skills_item' key={id}>
            <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">{percentage} <span> %</span></span>
            </div>
            <p className="skills__description">{description}</p>
            <div className="skills__bar">
                <span className="skills__percentage" style={{width: `${percentage}%`}}>
                    <span></span>
                </span>
            </div>
        </div>
        )
    })}
    </>

  )
}

export default Items
