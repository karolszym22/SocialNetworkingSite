import React from 'react';
import Button from '../components/Button/ReactionButton';
import GlobalStyle from '../theme/GlobalStyle';

const Root = () => 
(
  <div>
    <GlobalStyle />
       <h1>Siema Karol</h1>
       <Button>Like it</Button>
       <Button>Comment it</Button>
  </div>
)


export default Root;