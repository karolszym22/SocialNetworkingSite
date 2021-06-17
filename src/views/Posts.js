import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'
import UserPageTemplete from '../components/templates/UserPageTemplete'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = () => (
<UserPageTemplete>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
</UserPageTemplete>
);

export default Posts;