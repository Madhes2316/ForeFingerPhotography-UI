import React from 'react'
import './FestivalGreeting.css';
import christmasNewyear from '../../../assets/festivalGreeting-img/christmasNewyear-img.jpg';

const FestivalGreeting = () => {
    //Make this below constant as false when u dont want to show fesival greetings
    const showGreeting = false;

    const handleCall = () => {
        window.location.href = 'tel:+919488187955'; // Replace with the desired phone number
      };

  return (
    <>
    {showGreeting == false ?
    <div>

    </div>
    :
    <div className='festivalGreetingMain-div'>
        <div className='festivalCardMain-div'>
            <h1>Wishing you all a Happy and Posperous Christmas and Newyear 2025</h1>
            <img src={christmasNewyear} alt="" />
            <span>Capture the magic of Christmas and New Year with <span className='ffp-Name-span'>Forefinger Photography</span> book your session today and make this festive season unforgettable!</span>
            <button className='festivalGreeting-bookNow-button' onClick={handleCall}>Call Us</button>
        </div>
    </div>
    }
    </>
  )
}

export default FestivalGreeting;