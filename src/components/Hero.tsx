import React from 'react'
import Navbar from './Navbar'
import "../app/styles/hero.css";


const Hero = () => {
  return (
   <div id="hero" className='hero-container min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover'
      style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
   
   <Navbar /> 
     <div className='hero-content'>
      <div className='hidden lg:block'></div>
      <div className='hero-text'>
        <div className='hero-main'>
          <p data-aos="zoom-in-up">I&aposm</p>
          <p data-aos="zoom-in-up">Mahnoor</p>
          <p data-aos="zoom-in-up">shahid</p>
        </div>
      </div>
     </div>
  
    </div>
  )
}

export default Hero