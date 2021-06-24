import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostsContainer from '../components/templates/PostsContainer'
import PostsHistory from '../views/PostsHistory'
import Posts from '../views/Posts'
import UserProfile from '../views/UserProfile'
import PreviewPost  from './PrieviewPost';

const Root = () => 
(
  
  <BrowserRouter> 
    <PostsContainer>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" component={Posts} />
          <Route  path="/posts/:id" component={PreviewPost} />
          <Route path="/messages" component={PostsHistory} />
          <Route path="/informations" component={UserProfile} />
        </Switch>
        
    </PostsContainer>
  </BrowserRouter>
)


export default Root;