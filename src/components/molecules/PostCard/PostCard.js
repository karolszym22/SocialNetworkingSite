import React from 'react';
import styled from 'styled-components';
import PostHeading from '../../atoms/Heading/PostHeading';


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
const Image = styled.div`
border-radius: 50%;
border: 1px solid black;
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



const PostCard = () =>
(
    <Container>
      <AuthorContainer>
        <AuthorImage>
            <Image/>
        </AuthorImage>
        <h4>Karol Szymański</h4>
      </AuthorContainer> 
      <PostContent>
          <p>asdsadasdasdasdasdasdas</p>
      </PostContent>
        <p>Fakebook</p>
    </Container>
  
)

export default PostCard