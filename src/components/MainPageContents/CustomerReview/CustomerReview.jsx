import './CustomerReview.css';
import rajaramKanthan from '../../../assets/customerReview-img/Rajaram_Kanthan.png';
import vinithaShanmugavel from '../../../assets/customerReview-img/vinitha_Shanmugavel.png';
import myvizhi_Myvizhi from '../../../assets/customerReview-img/myvizhi_Myvizhi.png';
import sudhan_Shivaraj from '../../../assets/customerReview-img/sudhan_Shivaraj.png';
import p_V from '../../../assets/customerReview-img/p_V.png';
import nirmal_ProfilePic from '../../../assets/customerReview-img/nirmal_ProfilePic.png';
import vinod_Kumar from '../../../assets/customerReview-img/vinod_Kumar.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import React from 'react'
import StarRating from '../StarRating/StarRating.jsx';

const CustomerReview = () => {

    const googleReviewsArray = [
        {
            id:1,
            name: 'RAJARAM KANTHAN',
            image:rajaramKanthan,
            reviewText:'I had an exceptional experience working with Surjith Kumar. From start to finish, his professionalism and creativity shone through. He took the time to understand our vision and captured every moment perfectly. The attention to detail and ability to make me feel at ease resulted in stunning, high-quality photos that I will cherish forever. Highly recommend for anyone looking for top-notch photography services! Thank you for your wonderful albums 🥰',
            rating:5
        },
        {
            id:2,
            name: 'Vinitha Shanmugavel',
            image:vinithaShanmugavel,
            reviewText:"Surjith's photography skills were awesome. The album and videos looked very impressive for me and my family. I really appreciate everything anna",
            rating:5
        },
        {
            id:3,
            name: 'Myvizhi Myvizhi',
            image:myvizhi_Myvizhi,
            reviewText:'Really thank you brother...we have so many compliments for our photos from friends and family ... Quality is stunning and the angles , lighting etc... Capture the day perfectly ...I am really happy 😊...',
            rating:5
        },
        {
            id:4,
            name: 'Sudhan Sivaraj',
            image:sudhan_Shivaraj,
            reviewText:'Fore Finger stands out as an exceptional choice. Excellent photography and Services.',
            rating:5
        },
        {
            id:5,
            name: 'Pushpavalli Vijayakumar',
            image:p_V,
            reviewText:"Excellent team good cordination surjith ,Really proud of your team work, Good work boys",
            rating:5
        },
        {
            id:6,
            name: 'நிர்மல்குமார் கிருஷ்ணன்',
            image:nirmal_ProfilePic,
            reviewText:`We had invited Surjit Kumar to photograph the housewarming party at our house and all the photos he took were loved by all the people in our family. So we are very happy with these photos! So we sincerely wish Forefinger Photography to keep growing!!!
                        And we will put him in touch with our acquaintances!!!
                        Thank you and hello!
                        Thus,
                        Sachin's family
                        Relatives and friends!!!`,
            rating:5
        },
        {
            id:7,
            name: 'Vinodh Kumar',
            image:vinod_Kumar,
            reviewText:`Surjith is our family yet rendering professional photography to all our families and relatives. Yes, word of mouth about his professionalism amongst our families spread like a wild fire and he is terribly busy these days. He is growing fast through his hard work and adeptness. However, this is my first feedback about him to the outside world after he has done photography for my daughter's blooming ceremony in Coimbatore in May 2024! Yes, my feedback took time and hence is solid!`,
            rating:5
        },
    ]

  return (
    <div className='customerReviewMain-div'>
        <div className='customerReview-span-div'>
            <span>Reviews our clients gave for our Services</span>
        </div>
        <div className='customerReviewCardMain-div'>
        <Swiper pagination={true} modules={[Pagination]} className="myCustomerReview-Swiper">
            {googleReviewsArray.map((review, index) => (
                <SwiperSlide className="customerReview-SwiperSlider" key={index}>
                    <div className="customerReviewCard-div">
                        <div className="photoName-div">
                        <img src={review.image} alt={`${review.name} Google Review Profile Picture`} />
                        <span>{review.name}</span>
                        </div>
                        <div className="reviewStar-div">
                        <p>{review.reviewText}</p>
                        <StarRating rating={review.rating} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  )
}

export default CustomerReview;