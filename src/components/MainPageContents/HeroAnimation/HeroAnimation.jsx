import React from 'react'
import './HeroAnimation.css';
import smileplease from '../../../assets/HeroAnimation/smile-please.png';
import stars from '../../../assets/HeroAnimation/stars.svg';

const HeroAnimation = () => {
  return (
      <div className='heroAnimation-text-div'>
          <div className='welcometext-div'>
            <p className='welcome-span'>Welcome to <span>ForeFinger</span> PhotoGraphy</p>
            <div className='icon-quote-div'>
              <img src={stars} alt="" />
                <p className='ffpqoute-div'>
                  Passing <span>smiles</span> for miles
                </p>
              <img src={stars} alt="" />
            </div>
          </div>
          <div className='heroImage-div'>
            <img src={smileplease} alt="" />
          </div>
      </div>
  )
}

export default HeroAnimation;