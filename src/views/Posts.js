import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'
import UserPageTemplete from '../components/templates/UserPageTemplete'

const posts = 
[
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale React jest lepszy'
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale JS jest lepszy'
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale Node jest lepszy'
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale Angular jest lepszy'
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale MongoDB jest lepszy'
    },
]



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = () => (
<UserPageTemplete>
    {posts.map(item => (
    <PostCard

      user={item.user}
      content= {item.content}
      key = {item.content}
    
    
    
    />) )}
</UserPageTemplete>
);

export default Posts;