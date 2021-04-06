import React from 'react';
import './PostItem.css';
import karolSzymanskiImage from '../../../images/profile.png'
const PostItem = () => 
(
    <li className = "postItem__wrapper">
        <div className = "postItem__imageContainer">
          <img src={karolSzymanskiImage} className="imageContainer__image"/>
        </div>
        <div>
            <h2>Karol Szymański</h2>
            <p className="postItem__description">Fajny ten fakebook, taki nie za bogaty</p>
            <button className="postItem__button postItem__button--like">Lubię to</button>
            <button className="postItem__button postItem__button--comment">Skomentuj</button>
        </div>
      
    </li>
)

export default PostItem;