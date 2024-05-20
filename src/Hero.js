import React from 'react'
import './Hero.css'
// import hand_icon from './Components/Assets/hand_icon.png'
import arrow_icon from './Components/Assets/arrow.png'
import hero_image from './Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New collections For everyone</p>
                </div>
            </div>
            <div className="hero-latest-button">
                <div>Latest collection</div>
                <img src={arrow_icon} alt="" />
                
                </div>
        </div>
        <div className="hero-right">
            <img src= {hero_image} alt="" />

        </div>
      
    </div>
  )
}

export default Hero
