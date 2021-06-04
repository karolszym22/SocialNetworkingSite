import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import PostCard from '../molecules/PostCard/PostCard'

const PostsContainer = ({ children }) => (
    
    <div>
      
    <GlobalStyle />

    
    <ThemeProvider theme={theme}>
    <>
    <PostCard/>

      {children}
      </>
    </ThemeProvider>
  </div>

);

PostsContainer.prototypes = 
{
    children: PropTypes.element.isRequired,
}

export default PostsContainer;