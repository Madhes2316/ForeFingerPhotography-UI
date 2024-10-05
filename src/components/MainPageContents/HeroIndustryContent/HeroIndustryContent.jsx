import React, { useState } from 'react'
import './HeroIndustryContent.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const HeroIndustryContent = () => {

    let industrialSwiperSliderArray = [
        {
          id:1,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipOTa233K2KVdBUeo4JzYueGRuO5gYPpf7zGNqo6=s1360-w1360-h1020',
          imgTitle:'Happy Couple'
        },
        {
          id:2,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipM3BIkmIEQ1u-p1EMFQ53HpHWhpumDOdZ9TlM8_=s1360-w1360-h1020',
          imgTitle:'Elegant Bridal'
        },
        {
          id:3,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipN3m33s6NYZw279Zu1aus0e_Z2GPzFuslbyU5Hg=s1360-w1360-h1020',
          imgTitle:'Caption'
        },
        {
          id:4,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipM3juftjsfdXik3BDe68a_3_hlsRomw6-fWmHGF=s1360-w1360-h1020',
          imgTitle:'Precious Moment'
        },
        {
          id:5,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipMLIiOimdG6dsnGAYBiF3AzPTFERh1UAdjR13PL=s1360-w1360-h1020',
          imgTitle:'Bharat Ram ❤ Sruthi'
        },
        {
          id:6,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipMoFb2HLDuIrlQLuS_0zMfObygWBAM2wUDF2x1S=s1360-w1360-h1020',
          imgTitle:'LifeLong Journey'
        },
        {
          id:7,
          imgUrl:'https://lh3.googleusercontent.com/p/AF1QipM1k9wMJn8dpznlKXuHqG5MLp9Y5e46cKyP9LGV=s1360-w1360-h1020',
          imgTitle:'Caption..'
        },
      ]
    
      const [currentTitle, setCurrentTitle] = useState(industrialSwiperSliderArray[0].imgTitle); // Set the initial title
    
      const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentTitle(industrialSwiperSliderArray[currentIndex].imgTitle);
      };

  return (
    <>
    <div className="mainIndustrial-div">
        <div className="mainIndustrialCard-div">
            <div className='industrial-textitems-div'>
                <span className='industrialProjects-span'>Industrial Projects</span>
                <span className='currentTitle-span'>{currentTitle}</span>
            </div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="industrial-swiper"
                onSlideChange={handleSlideChange}
            >
                {industrialSwiperSliderArray.map(slide => (
                  <SwiperSlide className='industry-swiperSilder' key={slide.id}>
                      <img src={slide.imgUrl} alt={slide.imgTitle || 'Slide image'} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className='industrial-cardbottombutton-div'>
                  <button>See all Projects</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroIndustryContent;