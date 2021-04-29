import React from 'react';
import ReactionButton from '../components/atoms/Button/reactionButtons/ReactionButton';
import HeaderButton from '../components/atoms/Button/headerButtons/HeaderButton';
import GlobalStyle from '../theme/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import { theme } from '../theme/mainTheme';
import Input from '../components/atoms/Input/input';


const Root = () => 
(
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
       <Input search></Input>
       <h1>Siema Karol</h1>
       <ReactionButton>Like it</ReactionButton>
       <ReactionButton>Comment it</ReactionButton>
       <HeaderButton></HeaderButton>
      </> 
    </ThemeProvider>
  </div>
)


export default Root;