import React from 'react'
import './TopWebPageLogo.css';
import ffplogo from '../../assets/Ffp-logo/ffp.png';
import ffplogoText from '../../assets/Ffp-logo/ffp-text.png';
import { useNavigate } from 'react-router-dom';

const TopWebPageLogo = () => {

  const navigate = useNavigate();
  const onTopLogoClick = ()=>{
    navigate('/home');
  }

  return (
    <>
    <div className='topWebPageLogo-div'>
        <div className='ffgimg-ffptext-div' onClick={()=>onTopLogoClick()}>
            <img className="ffplogo-img" src={ffplogo} alt="" />
            <img className="ffplogotext-img" src={ffplogoText} alt="" />
        </div>
    </div>
    </>
  )
}

export default TopWebPageLogo;