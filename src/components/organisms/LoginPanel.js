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
width: 80% ;
height: 550px;
border: 1px solid black;

`

const SignIn = () =>
( 
 <Container>
     <ProfileContainer>
         <h1 style={{ color: '#1877f2' }}>Facebook</h1>
         <h3 style={{ marginTop: '10px' }}>Ostatnie logowania</h3>
         <a style={{  color: '#767485', fontSize: '13px'  }}>Kliknij swoje zdjęcie lub dodaj konto</a>
     </ProfileContainer>
     <Form>
        <Field name="username" type="text"/>
        <Field name="password" type="password"/>
        <button type='submit'>Zaloguj się</button>
    </Form>
   
 </Container>
)
export default SignIn;    