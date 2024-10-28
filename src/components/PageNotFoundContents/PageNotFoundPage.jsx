import React from 'react'
import './PageNotFoundPage.css';
import lostLobby from '../../assets/PageNotFound-img/lostLobby.png';
import { Link } from 'react-router-dom';

const PageNotFoundPage = () => {
  return (
    <div className='mainPageNotFound-div'>
        <div className="pageNotFoundContents-div">
            <h1>Error:404</h1>
            <span>Page Not Found!</span>
            <br />
            <p>Oh snap! This page must have been camera-shy. Let’s try another angle!</p>
            <br />
            <Link to="/home"><button className='pageNotFoundButton'>back to home</button></Link>
            <img src={lostLobby} alt="" />
        </div>
    </div>
  )
}

export default PageNotFoundPage