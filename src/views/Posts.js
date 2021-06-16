import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = () => (
<Container>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
   </Container>
);

export default Posts;