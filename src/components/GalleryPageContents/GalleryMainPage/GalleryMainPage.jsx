import React from 'react'
import './GalleryMainPage.css';
import galleryOneImg from '../../../assets/galleryPage/galleryOne-img.jpg';
import galleryTwoImg from '../../../assets/galleryPage/galleryTwo-img.jpg';

const GalleryMainPage = () => {

  const onGalleryThumbnailClick = (galleryName)=>{
    console.log(galleryName)
  }
  return (
    <div className='galleryMainPage-div'>
      <div className="galleryThumbnail-contents-div">
          <div className="selectGalleryText-div">
            <span>Select Your Gallery</span>
          </div>
          <div id="card-area">
          <div className="wrapper">
                <div className="box-area"> 
                    <div className="box" onClick={()=> onGalleryThumbnailClick("galleryOne")}>
                        <img src={galleryOneImg} alt="" />
                        <div className="overlay">
                            <h3>Event & LifeStyle Shoot</h3>
                        </div>
                    </div>
                    <div className="box"  onClick={()=> onGalleryThumbnailClick("galleryTwo")}>
                        <img src={galleryTwoImg} alt="" />
                        <div className="overlay">
                            <h3>Corp. & Industrial Shoot</h3>
                        </div>
                    </div>
                </div>            
          </div>       
        </div>
      </div>
    </div>
  )
}

export default GalleryMainPage