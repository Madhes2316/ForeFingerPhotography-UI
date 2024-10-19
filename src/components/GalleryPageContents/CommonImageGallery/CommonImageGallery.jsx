import React, { useEffect, useState } from 'react'
import './CommonImageGallery.css';
import { useParams,useNavigate } from 'react-router-dom';

const CommonImageGallery = () => {

  const params = useParams();
  const [titleParam,setTitleParam] = useState(params.topicName);

  // Use useEffect to update the state only when params change
  useEffect(() => {
    switch (params.topicName) {
      case 'outdoor':
        setTitleParam("Outdoor Shoot");
        break;
      case 'candid':
        setTitleParam("Candid Shoot");
        break;
      case 'marriage':
        setTitleParam("Marriage Shoot");
        break;
      default:
        setTitleParam("Gallery");
    }
  }, [params.topicName]);  // Dependency array: only run when topicName changes

  const navigate = useNavigate();
  const onGoBackToTopicClick = ()=>{
    navigate('/gallery/galleryone');
  }

  return (
    <div className='commonGalleryMain-div'>
      <div className="TopicTitle-div">
          <span>{titleParam}</span>
      </div>
      <div className='commonImageGalleryMain-div'>
          <div className="commonImagesCard-div">
              <img src="https://lh3.googleusercontent.com/p/AF1QipOg8e-QRurh6Tstd-X2vYY0Hqx9n2J_zpJNZPSu=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPZxX-t0swaSf1PA0fIOmo_Xa6pz-vueNmEGjo0=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipNiD5ebIPeAv7jvzw0xQSE7NP2IuBN3Le3KKiFt=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipOcn8xbThMAuLHa88sLQpS7XspSWlQx_oDNoRfx=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipO6CPwwM3LYglQfUZQ3IQrepkmAQZHclniRHHOZ=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipMaAucxAwn9EOSit0rjfh8NGAcY83ioa6Sao9hV=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPjHUnPSCsHc-r789wXbgMA3NSwGmX-qNskoJjC=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipMxItmWeBgLzgEtqAfqYJ1AM5MUc2Y7Yvi31o7m=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPH2RugWoKRiuJ4LePRR24kCGb0Qtzy3hK8CVni=s1360-w1360-h1020" alt="" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipMNiCmzdcmS2I35vzNDyAdFzYr1wR9WtB1AWKJX=s1360-w1360-h1020" alt="" />
          </div>
      </div>
      <div className="goToPreviousTopicPage-div" onClick={() => onGoBackToTopicClick()}>
          <button> <span>&#8592;</span> take me to topic Page</button>
      </div>
    </div>
  )
}

export default CommonImageGallery;