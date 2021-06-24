import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostsContainer from '../components/templates/PostsContainer'
import PostsHistory from '../views/PostsHistory'
import Posts from '../views/Posts'
import UserProfile from '../views/UserProfile'
import PreviewPost  from './PrieviewPost';
import { routes } from '../components/routes/routes';

const Root = () => 
(
  
  <BrowserRouter> 
    <PostsContainer>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/posts" />} />
          <Route exact path={routes.postsContainer} component={Posts} />
          <Route  path={routes.post} component={PreviewPost} />
          <Route path={routes.messages} component={PostsHistory} />
          <Route path={routes.userInformations} component={UserProfile} />
        </Switch>
        
    </PostsContainer>
  </BrowserRouter>
)


export default Root;