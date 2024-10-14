import React from 'react'
import './GalleryMainPage.css';
import galleryOneImg from '../../../assets/galleryPage/galleryOne-img.jpg';
import galleryTwoImg from '../../../assets/galleryPage/galleryTwo-img.jpg';

const GalleryMainPage = () => {
  return (
    <div className='galleryMainPage-div'>
      <div className="selectGalleryText-div">
        <span>Select Your Gallery</span>
      </div>
      <div className="galleryOne-div">
          <img src={galleryOneImg} alt="Event and LifetStyle PhotoGraphy Thumbnail Image" />
      </div>
      <div className="galleryTwo-div">
          <img src={galleryTwoImg} alt="Corporate and Industrial PhotoGraphy Thumbnail Image" />
      </div>
    </div>
  )
}

export default GalleryMainPage