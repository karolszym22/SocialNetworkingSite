import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';




const PostsContainer = ({ children }) => (
    
    <div>
      
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
  </div>

);

PostsContainer.prototypes = 
{
    children: PropTypes.element.isRequired,
}

export default PostsContainer;