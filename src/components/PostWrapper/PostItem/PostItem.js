import React from 'react';
import './PostItem.css';
import karolSzymanskiImage from '../../../images/profile.png'
const PostItem = () => 
(
    <li className = "postItem__wrapper">
        <img src={karolSzymanskiImage} className="PostItem__image"/>
        <div>
            <h2>Karol Szymański</h2>
            <p>Fajny ten fakebook, taki nie za bogaty</p>
            <button>Lubię to</button>
            <button>Skomentuj</button>
        </div>
      
    </li>
)

export default PostItem;