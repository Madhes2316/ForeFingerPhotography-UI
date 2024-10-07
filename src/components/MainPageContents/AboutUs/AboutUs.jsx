import React from 'react'
import './AboutUs.css';
import cameraClick from '../../../assets/videos/camera-click.webp'
import iceCreamCat from '../../../assets/bg-images/cute-cat-nature.png';
import headPhoneCat from '../../../assets/bg-images/cute-cat-studio.png';

const AboutUs = () => {
  return (
    <div className='aboutusmain-div'>
        <div className="aboutUsContents-div">
            <div className='about-ffg-span'>
                <span>Team Surjith's <span className='ffg-title-span'>Fore Finger Photography</span>(Pausing Smiles for Miles) Here we undertake all kind of Event photography like WEDDING FILMS (Pre & Post) CANDID, PORTFOLIO, AD FILMS, INDUSTRIAL Shoot According to customers choice, place</span>
            </div>
            <div className='three-block-div'>
                <div className="qualityCartoon-div">
                    <div className='text-span-div'>
                        <span>We Aim Quality</span>
                    </div>
                    <div className='img-video-div'>
                        <img src={cameraClick} alt="" />
                    </div>
                </div>
                <div className='slogan2-div'>
                    <span>Affordable Prices</span>
                    <img src={iceCreamCat} alt="" />
                </div>
                <div className='slogan3-div'>
                    <img src={headPhoneCat} alt="" />
                    <span>Timely Delivery</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;