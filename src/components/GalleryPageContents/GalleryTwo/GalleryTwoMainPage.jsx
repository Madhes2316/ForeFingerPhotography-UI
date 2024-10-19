import React from 'react'
import { useNavigate } from 'react-router-dom';
import './GalleryTwoMainPage.css';
import imgSrc from '../../../assets/galleryPage/galleryTwo-img.jpg';

const GalleryTwoMainPage = () => {
  const navigate = useNavigate();
    const onGoBackToGalleryClick = ()=>{
        navigate('/gallery');
    }
  return (
    <div className='galleryTwoMain-div'>
        <div className="galleryTwoContents-div">
            <span>View Photos of any Topic</span>
            <div className='galleryTwoCard-grid'>
                <div className='galleryTwoCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardTwoText-body">
                        <h2>Outdoor Shoot</h2>
                        <p>Discover the beauty of outdoor photography, where natural light and stunning landscapes bring moments to life.</p>
                        <button>View Photos</button>
                    </div>
                </div>
                <div className='galleryTwoCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardTwoText-body">
                        <h2>Candid Shoot</h2>
                        <p>Discover the beauty of outdoor photography, where natural light and stunning landscapes bring moments to life.</p>
                        <button>View Photos</button>
                    </div>
                </div>
                <div className='galleryTwoCard-div'>
                    <img src={imgSrc} alt="" />
                    <div className="cardTwoText-body">
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

export default GalleryTwoMainPage;