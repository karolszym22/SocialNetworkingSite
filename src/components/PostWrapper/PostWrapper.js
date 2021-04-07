import React from 'react';
import PostItem from './PostItem/PostItem.js'


const PostWrapper = (props) => 
(
    <ul>
      {props.items.map(item => (
        <PostItem key={item.id} {...item}/>
))}
    </ul>
);


export default PostWrapper;
