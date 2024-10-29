import React from 'react'
import './AboutUsPage.css';
import aboutUsImg from '../../assets/AboutUsPage-img/aboutUsImg.png';
import profilePicOne from '../../assets/AboutUsPage-img/profilePicOne.png';
import profilePicTwo from '../../assets/AboutUsPage-img/profilePicTwo.png';
import profilePicThree from '../../assets/AboutUsPage-img/profilePicThree.png';
import profilePicFour from '../../assets/AboutUsPage-img/profilePicFour.png';
import profilePicFive from '../../assets/AboutUsPage-img/profilePicFive.png';
import profilePicSix from '../../assets/AboutUsPage-img/profilePicSix.png';

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      photoSrc: profilePicTwo,
      name: "Surjith Kumar.E",
      role: "CEO, Founder,Chief Photographer",
    },
    {
      id: 2,
      photoSrc: profilePicThree,
      name: "Surya.E",
      role: "Photographer",
    },
    {
      id: 3,
      photoSrc: profilePicSix,
      name: "John doe",
      role: "Junior Photographer",
    },
    {
      id: 4,
      photoSrc: profilePicFive,
      name: "Judith",
      role: "Editor",
    },
    {
      id: 5,
      photoSrc: profilePicFour,
      name: "Michonne",
      role: "Designer",
    },
    {
      id: 6,
      photoSrc: profilePicOne,
      name: "Madhes.V",
      role: "Web Developer",
    },
  ];

  return (
    <div className='aboutUsPageMain-div'>
        <div className="aboutUsPageContents-div">
            <span className='aboutUsTitle-span'>About Us</span>
            <div className="aboutUsText-div">
              <h1>A team of young and enthusiastic individuals driven by a passion to provide affordable and timely photography services for all types of events.</h1>
            </div>
            <div className="aboutUsImg-div">
              <img src={aboutUsImg} alt="" />
            </div>
        </div>
        <div className="teamContents-div">
          <span>Our Team:</span>
          <div className="teamCard-div">
              {teamMembers.map(member => (
                <div className="teamCardItems" key={member.id}>
                  <img src={member.photoSrc} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default AboutUsPage