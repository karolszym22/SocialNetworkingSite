import React from 'react';
import Button from '../components/atoms/Button/ReactionButton';
import GlobalStyle from '../theme/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import { theme } from '../theme/mainTheme';



const Root = () => 
(
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
       <h1>Siema Karol</h1>
       <Button>Like it</Button>
       <Button>Comment it</Button>
      </> 
    </ThemeProvider>
  </div>
)


export default Root;