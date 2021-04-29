import React from 'react';
import ReactionButton from '../components/atoms/Button/reactionButtons/ReactionButton';
import HeaderButton from '../components/atoms/Button/headerButtons/HeaderButton';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme/mainTheme';
import Input from '../components/atoms/Input/input';
import PostsContainer from '../components/templates/PostsContainer'

const Root = () => 
(
    <PostsContainer>
      <BrowserRouter>
       <Input search></Input>
       <h1>Siema Karol</h1>
       <ReactionButton>Like it</ReactionButton>
       <ReactionButton>Comment it</ReactionButton>
       <HeaderButton></HeaderButton>
       </BrowserRouter>
     </PostsContainer>
)


export default Root;