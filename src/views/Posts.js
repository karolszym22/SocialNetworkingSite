import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'
import UserPageTemplete from '../components/templates/UserPageTemplete'

const posts = 
[
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale React jest lepszy',
        id: 1,
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale JS jest lepszy',
        id: 2,
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale Node jest lepszy',
        id: 3,
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale Angular jest lepszy',
        id: 4,
    },
    {
        user: 'Karol Szymański',
        content: 'Jestem super ale MongoDB jest lepszy',
        id: 5,
    },
]



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = () => (
<UserPageTemplete>
    {posts.map(({user,content,id}) => (
    <PostCard

      user={user}
      content= {content}
      key = {id}
    
    
    
    />) )}
</UserPageTemplete>
);

export default Posts;