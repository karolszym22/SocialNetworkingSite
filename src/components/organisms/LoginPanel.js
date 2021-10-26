import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
const ProfileContainer = styled.div`

width: 60%;
height: 100%;
border: 1px solid black;

`


const Container = styled.div`
display: flex;
align-items: center;
width: 80% ;
height: 550px;
border: 1px solid black;
justify-content: center;
`

const SignIn = () =>
( 
 <Container>
     <ProfileContainer>
         <h1>Facebook</h1>
     </ProfileContainer>
     <Form>
        <Field name="username" type="text"/>
        <Field name="password" type="password"/>
        <button type='submit'>Zaloguj się</button>
    </Form>
   
 </Container>
)
export default SignIn;    