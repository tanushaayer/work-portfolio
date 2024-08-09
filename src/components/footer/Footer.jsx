import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
         <div className="footer__container container grid">
         <div className='footer__socials'>
                <a href='https://www.linkedin.com/in/tanusha-ayer/' target="_blank" className='footer__social-link'>
                    <FaLinkedin/>
                </a>
                <a href='https://github.com/tanushaayer' target="_blank" className='footer__social-link'>
                    <FaGithub/>
                </a>
                <a href='https://x.com/tansaa__' target="_blank" className='footer__social-link'>
                    <FaTwitter/>
                </a>
            </div>



            <p className="footer__copyright text-cs">&copy; 2024 <span>All Rights Reserved</span></p>
            <p className="footer__copyright text-cs">Developed by <span>Tanusha Ayer</span></p>
        </div>   
   </footer>
  )
}

export default Footer
