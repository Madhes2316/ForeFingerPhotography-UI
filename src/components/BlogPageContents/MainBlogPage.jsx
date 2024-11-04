import React from 'react'
import './MainBlogPage.css';
import eggCooking from '../../assets/BlogPage-img/eggCooking.webp';

const MainBlogPage = () => {
  return (
    <div className="mainBlogPage-div">
      <div className="blogPageContents-div">
          <img className='blogEggToss-img' src={eggCooking} alt="" />
          <br />
          <span>We're Still</span>
          <br />
          <h1>Cooking Our <span className='h1span-blog'>Blog</span> Page</h1>
          <br />
          <span>"Picture This: A Blog Worth the Wait!"</span>
          <br />
          <span>We’re still fine-tuning our focus, adjusting the lighting, and prepping the best shots for you! Soon, this space will be brimming with tips, tricks, and stories behind the lens. So, stay in the frame and check back soon—because just like a good photo, perfection takes a bit of patience!</span>
          <br />
      </div>
    </div>
  )
}

export default MainBlogPage;