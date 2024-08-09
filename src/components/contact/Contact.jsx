import React, { useState } from 'react'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";
import "./contact.css"

const Contact = () => {
    const [form, setForm] = useState({email: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    }
  return (
    <section className="contact section" id="contact">
        <h2 className='section__title text-cs'>Contact Me</h2>
        <p className='section__subtitle'>Let's <span>Connect</span></p>

        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap/>
                    </span>
                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">Dallas, Texas, USA</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser/>
                    </span>
                    <h3 className="contact__card-title">Open To Work</h3>
                    <p className="contact__card-data">Available for full-time W-2 Employment</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope/>
                    </span>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">tanushaayer@gmail.com</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook/>
                    </span>
                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+1 469-505-7172</p>
                </div>
            </div>
            <form  className="contact__form">
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                        <input type="email" name='email' value={form.email} onChange={handleChange} className="contact__form-input" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                        <textarea className='contact__form-input' name='message' value={form.message} onChange={handleChange}></textarea>
                    </div>
                    <div className='contact__submit'>
                        <button type='submit' className='btn text-cs'> Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
