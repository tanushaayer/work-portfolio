import React from 'react'
import "./home.css"
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Goal from '../goal/Goal';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>
                Hello World!, <span>My Name Is</span>
            </p>
            <h1 className='home__title text-cs'>
                <span>Tanusha</span> Ayer

            </h1>
            <p className='home__job'>
                <span className="text-cs">
                    I Am a 
                    <b> Full Stack Web Developer</b>
                </span>
            </p>
            <div className='home__img-wrapper'>
                <div className='home__banner'>
                    <img src={profileImg} alt='Tanusha Ayer Image' className='home__profile'/>
                </div>

                <p className='home__data home__data-one'>
                    <span className='text-lg'>
                        2<b>+ </b>
                    </span>
                    <span className='text-sm text-cs'>
                         Years of <span>Experience</span>
                    </span>
                </p>
                <p className='home__data_two home__data-two'>
                    <span className='text-sm text-cs'>
                         React, Next, Java, SpringBoot,....
                    </span>
                </p>

                <img src={shapeOne} alt="Circle Shape" className="shape shape__1" />
                <img src={shapeTwo} alt="Circle shape" className="shape shape__2" />
                <img src={shapeTwo} alt="circle shape" className="shape shape__3" />
            </div>
            <p className='home__text'>
            Dedicated to crafting and optimizing user-focused web applications using modern front-end technologies such as React, TypeScript, and Next.js. Experienced in Node.js, Scala, and Java to develop secure and high-performance server-side solutions. Strong command over Cypress, Git, Maven, MySQL, PostgreSQL, GraphQL.
            </p>
            <div className='home__socials'>
                <a href='https://www.linkedin.com/in/tanusha-ayer/' target="_blank" className='home__social-link'>
                    <FaLinkedin/>
                </a>
                <a href='https://github.com/tanushaayer' target="_blank" className='home__social-link'>
                    <FaGithub/>
                </a>
                <a href='https://x.com/tansaa__' target="_blank" className='home__social-link'>
                    <FaTwitter/>
                </a>
            </div>
            <div className='home__btns'>
                <a href={require("../../assets/TanushaAyer-resume.pdf")} download="tanushaayer-resume" className='btn text-cs'>
                    Download CV
                </a>
                <a href='#skills' className='hero__link text-cs'>
                    My Skills
                </a>
            </div>
        </div>
        </div>
        <Goal />
    </section>
  )
}

export default Home
