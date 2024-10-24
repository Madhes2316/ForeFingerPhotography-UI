import React from 'react'
import './ServicePage.css';
import serviceSvgOne from '../../assets/servicePage-img/serviceSvgOne.svg';

const ServicePage = () => {
  return (
    <div className='servicePage-main-div'>
        <div className="servicePageContents-div">
                <span>Services That we Offer</span>
                <div className="serviceListContents-div">
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="serviceCard-div">
                        <img src={serviceSvgOne} alt="" />
                        <h1>Commercial Photography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ServicePage;