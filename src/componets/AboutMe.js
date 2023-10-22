import React from 'react'
import '../styles/css/about.min.css'
import image from '../assets/image2.jpg'

const AboutMe = () => {
  return (
    <section className='about'>
        <div className="left-section">
          <img src={image} alt="" /> 
        </div>
        <div className="right-section">
            <h2>Some header texts</h2>
            <p>Some other detail texts</p>
        </div> 

    </section>
  )
}

export default AboutMe