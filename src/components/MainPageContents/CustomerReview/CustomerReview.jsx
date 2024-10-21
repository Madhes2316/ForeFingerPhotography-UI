import './CustomerReview.css';
import rajaramKanthan from '../../../assets/customerReview-img/Rajaram_Kanthan.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import React from 'react'

const CustomerReview = () => {
  return (
    <div className='customerReviewMain-div'>
        <div className='customerReview-span-div'>
            <span>Reviews our clients gave for our Services</span>
        </div>
        <div className='customerReviewCardMain-div'>
        <Swiper pagination={true} modules={[Pagination]} className="myCustomerReview-Swiper">
        <SwiperSlide className='customerReview-SwiperSlider'>
            <div className="customerReviewCard-div">
                <div className="photoName-div">
                    <img src={rajaramKanthan} alt="customer Google Review Profile Picture" />
                    <span>RAJARAM KANTHAN</span>
                </div>
                <div className="reviewStar-div">
                    <p>I had an exceptional experience working with Surjith Kumar. From start to finish, his professionalism and creativity shone through. He took the time to understand our vision and captured every moment perfectly. The attention to detail and ability to make me feel at ease resulted in stunning, high-quality photos that I will cherish forever. Highly recommend for anyone looking for top-notch photography services! Thank you for your wonderful albums 🥰</p>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='customerReview-SwiperSlider'>
            <div className="customerReviewCard-div">
                <div className="photoName-div">
                    <img src={rajaramKanthan} alt="customer Google Review Profile Picture" />
                    <span>Vinitha Shanmugavel</span>
                </div>
                <div className="reviewStar-div">
                    <p>Surjith's photography skills were awesome. The album and videos looked very impressive for me and my family. I really appreciate everything anna</p>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='customerReview-SwiperSlider'>
            <div className="customerReviewCard-div">
                <div className="photoName-div">
                    <img src={rajaramKanthan} alt="customer Google Review Profile Picture" />
                    <span>Vinitha Shanmugavel</span>
                </div>
                <div className="reviewStar-div">
                    <p>Surjith's photography skills were awesome. The album and videos looked very impressive for me and my family. I really appreciate everything anna</p>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='customerReview-SwiperSlider'>
            <div className="customerReviewCard-div">
                <div className="photoName-div">
                    <img src={rajaramKanthan} alt="customer Google Review Profile Picture" />
                    <span>Vinitha Shanmugavel</span>
                </div>
                <div className="reviewStar-div">
                    <p>Surjith's photography skills were awesome. The album and videos looked very impressive for me and my family. I really appreciate everything anna</p>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default CustomerReview;