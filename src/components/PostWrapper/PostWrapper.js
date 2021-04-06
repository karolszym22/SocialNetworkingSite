import React from 'react';
import PostItem from './PostItem/PostItem.js'
import {usersComments} from '../../data/usersPosts'

const PostWrapper = () => 
(
    <ul>
      {usersComments.map(post => (
        <PostItem
            image = {[post.image]}
            name={[post.name]}
            postContent = {[post.postContent]}
        />
))}
    </ul>
);


export default PostWrapper;
