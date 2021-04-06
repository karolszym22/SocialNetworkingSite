import React from 'react';
import './PostItem.css';


const PostItem = ({
    
    image,
    name,
    postContent,
   
}) => 
(
    
    <li className = "postItem__wrapper">
        <div className = "postItem__imageContainer">
          <img className="imageContainer__image" src={image}/>
        </div>
        <div>
            <h2>{name}</h2>
            <p className="postItem__description">{postContent}</p>
            <button className="postItem__button postItem__button--like">Lubię to</button>
            <button className="postItem__button postItem__button--comment">Skomentuj</button>
        </div>
      
    </li>
)

export default PostItem;