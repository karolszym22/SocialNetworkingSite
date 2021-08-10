import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import { withRouter } from 'react-router';
import PageContext from 'context';

class PostsContainer extends Component {
  state = {
    pageType: 'posts',
  }

  componentDidMount() 
  {
    this.setCurrentPage();
  }
  componentDidUpdate(prevProps, prevState) 
  {
    this.setCurrentPage(prevState);
  }
  
  setCurrentPage = (prevState = '') => {
    const pageTypes = ['posts', 'articles'];
    const {
      location: { pathname },
    
  } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    if(prevState.pageType !== currentPage)
    {
         this.setState({ pageType: currentPage });
         console.log(this.state);
    }
   

   }
   
   render()
   {
     const { children } = this.props;
     const { pageType } = this.state;

     return (
       <div>
         <PageContext.Provider value={pageType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
      </PageContext.Provider>
      </div>
      
     )
   }
  
 


}


    



PostsContainer.prototypes = 
{
    children: PropTypes.element.isRequired,
}

export default withRouter(PostsContainer);