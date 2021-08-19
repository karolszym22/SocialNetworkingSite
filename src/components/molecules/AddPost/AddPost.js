import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button/addPostButton/addPostButton.js'
import Input from '../../atoms/Input/Input.js';
import { connect } from 'react-redux';
import {addItem} from '../../actions/index.js'
import { Formik, Form, Fields, ErrorMessage, Field } from 'formik';



const Container = styled.div`

height: 250px;
width: 350px;
margin: 15px;
border: 1px solid black;
`



const AddPost = ({postType, addItem}) =>
( 
 
    <Container>
    
     
       <Formik 
        initialValues = {{title: '', content: ''}}
        onSubmit={(values, { setSubmitting }) =>
       {
        console.log(values);
        setSubmitting(false);
       }}


       >

         {({isSubmitting}) => 
         (
           <Form>
           <Input as={Field} type ="text" name="title"  placeholder="title"></Input>
           <Button
             
             type = "submit"
      
           >
          </Button> 
           </Form>
         )
         }
       </Formik>
        
      
      
      
        
    </Container> 
    
     


)

AddPost.propTypes = {
  postType: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

AddPost.defaultProps = {
  postType: 'posts',
}

const mapDispatchToProps = dispatch => ({
  addItem: (postType, itemContent) =>
  dispatch(addItem(postType, itemContent))
});

export default connect(null,mapDispatchToProps) (AddPost);

