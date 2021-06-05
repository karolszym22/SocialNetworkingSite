import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import PostCard from '../molecules/PostCard/PostCard'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const PostsContainer = ({ children }) => (
    
    <div>
      
    <GlobalStyle />

    
    <ThemeProvider theme={theme}>
    <Container>
    <PostCard/>

      {children}
      </Container>
    </ThemeProvider>
  </div>

);

PostsContainer.prototypes = 
{
    children: PropTypes.element.isRequired,
}

export default PostsContainer;