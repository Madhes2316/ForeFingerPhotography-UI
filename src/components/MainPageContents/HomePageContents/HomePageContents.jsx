import React from 'react'
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import HeroContent from '../HeroContent/HeroContent';
import HeroIndustryContent from '../HeroIndustryContent/HeroIndustryContent';
import ClientList from '../ClientList/ClientList';

const HomePageContents = () => {
  return (
    <>
        <HeroAnimation />
        <HeroContent />
        <HeroIndustryContent />
        <ClientList />
    </>
  )
}

export default HomePageContents;