import React from 'react'
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import HeroContent from '../HeroContent/HeroContent';
import HeroIndustryContent from '../HeroIndustryContent/HeroIndustryContent';
import ClientList from '../ClientList/ClientList';
import AboutUs from '../AboutUs/AboutUs';

const HomePageContents = () => {
  return (
    <>
        <HeroAnimation />
        <HeroContent />
        <HeroIndustryContent />
        <AboutUs />
        <ClientList />
    </>
  )
}

export default HomePageContents;