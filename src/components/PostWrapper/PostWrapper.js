import React from 'react';
import PostItem from './PostItem/PostItem.js'
import {usersComments} from '../../data/usersPosts'

const PostWrapper = () => 
(
    <ul>
      {usersComments.map(post => (
        <PostItem {...post}/>
))}
    </ul>
);


export default PostWrapper;
