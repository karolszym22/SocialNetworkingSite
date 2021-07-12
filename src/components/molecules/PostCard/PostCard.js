import React, { Component } from 'react';
import styled from 'styled-components';
import ReactionButton from '../../atoms/Button/reactionButtons/ReactionButton';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'


const Container = styled.div`
border: 1px solid black;
width: 500px;
display: flex;
flex-direction: column;
margin-top: 30px;

`

const AuthorContainer = styled.div`
margin: 10px 20px;
width: 460px;
padding: 20px;
border: 1px solid black;
height: 55px;
display: flex;
`

const AuthorImage = styled.div`
height: 100%;
display: flex;
align-items: center;
margin: 0px 5px;

`
const Image = styled.img`
border-radius: 50%;
height: 50px;
width: 50px;
background-image: url("profile.png");
`
const PostContent = styled.p`

width: 460px;
margin: 15px 20px;
box-sizing: border-box;
padding: 5px;
min-height: 100px;
border: 1px solid black;

`



class PostCard extends Component 
{
  state = {
    redirect: false,
  };

checkSpecificPost = () => this.setState({redirect: true});




render() {

const {id,user, content, articleUrl, created} = this.props;


if(this.state.redirect)
{
  return <Redirect to={`posts/${id}`} />;
}



  return (
    <Container onClick={this.checkSpecificPost}>
      <AuthorContainer>
        <AuthorImage>
            <Image src="https://yt3.ggpht.com/ytc/AAUvwngEMVOlwtrxr1BTvs5RFGirsuzZ6YeOvdwCv2UNUg=s900-c-k-c0x00ffffff-no-rj"/>
        </AuthorImage>
        <h4>{user}</h4>
      </AuthorContainer> 
      <PostContent>
          <p>{content}</p>
      </PostContent>
      <ReactionButton/>
        <p>Fakebook</p>
    </Container>
  
);
}
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
}

PostCard.defaultProps = {
  twitterName: null,
  articleUrl: null,
}


export default PostCard