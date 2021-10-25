import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100% ;
display: flex;
justify-content: center;
`

const SignIn = () =>
( 
 <Container>
     <Form>
        <Field name="username" type="text"/>
        <Field name="password" type="password"/>
        <button type='submit'>Zaloguj się</button>
    </Form>
 </Container>
)
export default SignIn;    