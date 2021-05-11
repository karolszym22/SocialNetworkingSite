import React from 'react';
import ReactionButton from '../components/atoms/Button/reactionButtons/ReactionButton';
import HeaderButton from '../components/atoms/Button/headerButtons/HeaderButton';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { theme } from '../theme/mainTheme';
import Input from '../components/atoms/Input/input';
import PostsContainer from '../components/templates/PostsContainer'
import PostsHistory from '../views/PostsHistory'
import Posts from '../views/Posts'
import UserProfile from '../views/UserProfile'
import NavigationMenu from '../components/organisms/NavigationMenu'


const Root = () => 
(
  <BrowserRouter> 
    <PostsContainer>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/PostHistory" component={PostsHistory} />
          <Route path="/UserProfile" component={UserProfile} />
        </Switch>
    </PostsContainer>
  </BrowserRouter>
)


export default Root;