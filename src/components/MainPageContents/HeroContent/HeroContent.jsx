import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './HeroContent.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const HeroContent = () => {

  let swiperSliderArray = [
    {
      id:1,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipN8yWb9UG_cZsZoYAvi2mTVta4fTuZ9LQAaaySG=s1360-w1360-h1020',
      imgTitle:'Happy Couple'
    },
    {
      id:2,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipN9STj3tdosRu7twGxC716Fa978a69RxVJhDhqw=s1360-w1360-h1020',
      imgTitle:'Elegant Bridal'
    },
    {
      id:3,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipOGOt2EbxHITWpI_19mReK4I46WwZv6gX-GQbDc=s1360-w1360-h1020',
      imgTitle:'Caption'
    },
    {
      id:4,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipMsfwfWKQ-CSb4RnvXodbz7e9D2EkIs0A6rLN3K=s1360-w1360-h1020',
      imgTitle:'Precious Moment'
    },
    {
      id:5,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipNV2JnkzQGyjZ9MysIR6gzXZLDEnQhvRnAg4ph7=s1360-w1360-h1020',
      imgTitle:'Bharat Ram ❤ Sruthi'
    },
    {
      id:6,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipPX6AgY-xa8sDRdULY1DTgngWZ_Hxm9MCKIcufM=s1360-w1360-h1020',
      imgTitle:'LifeLong Journey'
    },
    {
      id:7,
      imgUrl:'https://lh3.googleusercontent.com/p/AF1QipNijAtetXW6RnJGGNJtSxWO_ZHG24WEpLTEPu_r=s1360-w1360-h1020',
      imgTitle:'Caption..'
    },
  ]

  const [currentTitle, setCurrentTitle] = useState(swiperSliderArray[0].imgTitle); // Set the initial title

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentTitle(swiperSliderArray[currentIndex].imgTitle);
    // console.log(swiperSliderArray[currentIndex].imgTitle);
  };

  return (
    <>
    <div className='maincardholder-div'>
      <div className='maincard-div'>
        <div className='textitems-div'>
          <span className='rp-span'>Our Projects</span>
          <span className='it-span'>{currentTitle}</span>
        </div>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
              >
                {swiperSliderArray.map(slide => (
                  <SwiperSlide key={slide.id}>
                      <img src={slide.imgUrl} alt={slide.imgTitle || 'Slide image'} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='cardbottombutton-div'>
                  <button>See all Projects</button>
              </div>
        </div>
    </div>
    </>
  )
}

export default HeroContent;