import './Hero.css';
import playIcon from '../../Assets/play_icon.png';
import pouseIcon from '../../Assets/pause_icon.png';
import arrowBtn from '../../Assets/arrow_btn.png';
import { useState } from 'react';


const Hero = ({ setPlayStatus, heroData, heroCount, setHeroCount, playStatus }) => {

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>

      <div className="heroExplore">
        <p>Explore the features</p>
        <img src={arrowBtn} alt="" />
      </div>


      <div className="hero-dot-play">
        <ul>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"} ></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>

        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pouseIcon : playIcon} alt="" />
        </div>
      </div>
    </div >
  )
}

export default Hero
