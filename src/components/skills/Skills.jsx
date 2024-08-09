import React, {useState} from 'react'
import "./skills.css"
import {skills} from "../../Data"
import Items from './Items'
import List from '../portfolio/List'

const allNavList = Array.from(new Set(skills.map((skill) => skill.category)));

const Skills = () => {
    const frontEndSkills = skills.filter((skill) => skill.category === "FrontEnd");
    const [skillItems, setMenuItems] = useState(frontEndSkills)
    const [navList, setCategories] = useState(allNavList);

    const filterItems= (category) => {
        const newProjectItems = skills.filter((item) => item.category === category)
            setMenuItems(newProjectItems)
        
    }
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title text-cs'>Professional Skills</h2>
        <p className='section__subtitle'>My <span>Talents</span></p>
        <List list={navList} filterItems={filterItems}/>

        <div className="skills__container container grid">
            <Items skills={skillItems}/>
        </div>
    </section>  
  )
}

export default Skills
