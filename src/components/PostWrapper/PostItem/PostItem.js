import React from 'react';
import './PostItem.css';


const PostItem = (props) => 
(
    
    <li className = "postItem__wrapper">
        <div className = "postItem__imageContainer">
          <img className="imageContainer__image" src={props.image}/>
        </div>
        <div>
            <h2>{props.name}</h2>
            <p className="postItem__description">{props.postContent}</p>
            <button className="postItem__button postItem__button--like">Lubię to</button>
            <button className="postItem__button postItem__button--comment">Skomentuj</button>
        </div>
      
    </li>
)

export default PostItem;