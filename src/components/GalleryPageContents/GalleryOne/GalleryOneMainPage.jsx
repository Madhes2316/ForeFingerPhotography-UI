import React from 'react'
import { useNavigate } from 'react-router-dom';
import './GalleryOneMainPage.css';
import imgSrc from '../../../assets/galleryPage/galleryOne-img.jpg';


const GalleryOneMainPage = () => {
    const navigate = useNavigate();
    const onGoBackToGalleryClick = ()=>{
        navigate('/gallery');
    }
  return (
    <div className='galleryOneMain-div'>
        <div className="galleryOneContents-div">
            <span>View Photos of any Topic</span>
            <div className='galleryOneCard-grid'>
                <div className='galleryOneCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardOneText-body">
                        <h2>Outdoor Shoot</h2>
                        <p>Discover the beauty of outdoor photography, where natural light and stunning landscapes bring moments to life.</p>
                        <button>View Photos</button>
                    </div>
                </div>
                <div className='galleryOneCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardOneText-body">
                        <h2>Candid Shoot</h2>
                        <p>Discover the beauty of outdoor photography, where natural light and stunning landscapes bring moments to life.</p>
                        <button>View Photos</button>
                    </div>
                </div>
                <div className='galleryOneCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardOneText-body">
                        <h2>Marriage Shoot</h2>
                        <p>Discover the beauty of outdoor photography, where natural light and stunning landscapes bring moments to life.</p>
                        <button>View Photos</button>
                    </div>
                </div>
            </div>
            <div className="goToPreviousPage-div" onClick={() => onGoBackToGalleryClick()}>
                <button> <span>&#8592;</span> take me to gallery Page</button>
            </div>
        </div>
    </div>
  )
}

export default GalleryOneMainPage