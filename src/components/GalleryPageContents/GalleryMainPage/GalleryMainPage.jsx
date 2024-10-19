import React from 'react'
import './GalleryMainPage.css';
import galleryThumbnailOne from '../../../assets/galleryPage/galleryOne-img.jpg';
import galleryThumbnailTwo from '../../../assets/galleryPage/galleryTwo-img.jpg';
import { useNavigate } from 'react-router-dom';

const GalleryMainPage = () => {

  const navigate = useNavigate();
  const onGalleryThumbnailClick = (galleryName)=>{
    console.log(galleryName)
    if (galleryName === "galleryOne") {
      navigate('/gallery/galleryone');
    } else if (galleryName === "galleryTwo") {
      navigate('/gallery/gallerytwo');
    }
  }
  return (
    <div className='galleryMain-div'>
        <div className="galleryMainContents-div">
            <span>Select Any Gallery</span>
            <div className='galleryMainCard-grid'>
                <div className='galleryMainCard-div'>
                    <img src={galleryThumbnailOne} alt="" />
                    <div className="cardMainText-body">
                        <h2>Event & LifeStyle Shoot</h2>
                        <p>Dive into various topics that we want to show you about our event and lifestyle photography.</p>
                        <button onClick={() => onGalleryThumbnailClick("galleryOne")}>View Gallery</button>
                    </div>
                </div>
                <div className='galleryMainCard-div'>
                    <img src={galleryThumbnailTwo} alt="" />
                    <div className="cardMainText-body">
                        <h2>Corporate & Industrial Shoot</h2>
                        <p>Dive into various topics that we want to show you about our corporate shoots we have undertaken.</p>
                        <button onClick={() => onGalleryThumbnailClick("galleryTwo")}>View Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryMainPage