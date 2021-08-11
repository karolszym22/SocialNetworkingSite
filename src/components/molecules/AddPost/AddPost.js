import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button/addPostButton/addPostButton.js'
import Input from '../../atoms/Input/Input.js';

const Container = styled.div`

height: 250px;
width: 350px;
margin: 15px;
border: 1px solid black;
`



const AddPost = () =>
(
  <div>
    <Container>
        <Input as="textarea" placeholder="title"></Input>
        <Button>Co słychać?</Button>
    </Container> 
    
     

  </div>
)

export default AddPost;