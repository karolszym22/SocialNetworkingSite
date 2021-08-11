import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/molecules/PostCard/PostCard'
import UserPageTemplete from '../components/templates/UserPageTemplete'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddPost from '../components/molecules/AddPost/AddPost.js'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Posts = ({posts})  => (
    <>
<UserPageTemplete>
<AddPost/>
{posts.map(({user,content,id}) => (
    <PostCard

      id ={id}
      user={user}
      content= {content}
      key = {id}
      postType = "posts"
    
    
    />) )}
</UserPageTemplete>
</>
);


const mapStateToProps = state => 
{
  const { posts } =  state
  return { posts };
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.number.isRequired,
       user: PropTypes.string.isRequired,
       content: PropTypes.string.isRequired,
       
    })
  )
}


export default connect(mapStateToProps) (Posts);