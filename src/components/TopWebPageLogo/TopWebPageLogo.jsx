import React from 'react'
import './TopWebPageLogo.css';
import ffplogo from '../../assets/Ffp-logo/ffp.png';

const TopWebPageLogo = () => {
  return (
    <>
    <div className='topWebPageLogo-div'>
        <div className='ffgimg-ffptext-div'>
            <img src={ffplogo} alt="" />
            <span>Fore Finger</span>
            <span>PhotoGraphy</span>
        </div>
    </div>
    </>
  )
}

export default TopWebPageLogo;