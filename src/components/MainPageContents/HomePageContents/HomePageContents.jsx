import React from 'react'
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import HeroContent from '../HeroContent/HeroContent';
import HeroIndustryContent from '../HeroIndustryContent/HeroIndustryContent';
import ClientList from '../ClientList/ClientList';
import AboutUs from '../AboutUs/AboutUs';
import ServiceList from '../ServiceList/ServiceList';

const HomePageContents = () => {
  return (
    <>
        <HeroAnimation />
        <HeroContent />
        <HeroIndustryContent />
        <AboutUs />
        <ServiceList />
        <ClientList />
    </>
  )
}

export default HomePageContents;