import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'
import UserPageTemplete from '../components/templates/UserPageTemplete'
import { connect } from 'react-redux';



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = ({posts})  => (
    <>
<UserPageTemplete>
{posts.map(({user,content,id}) => (
    <PostCard

      id ={id}
      user={user}
      content= {content}
      key = {id}
    
    
    
    />) )}
</UserPageTemplete>
</>
);


const mapStateToProps = state => 
{
  const { posts } =  state
  return { posts };
}
    


export default connect(mapStateToProps) (Posts);