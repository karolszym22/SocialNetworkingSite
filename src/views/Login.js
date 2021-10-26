import React from 'react';
import axios from 'axios';
import { Formik} from 'formik';
import SignIn from '../components/organisms/LoginPanel';
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100% ;
height: 100vh;
display: flex;
justify-content: center;
`


const Login = () => 
(
    <div>
        <Formik
            initialValues = {{username: '', password: ''}}
            onSubmit={({username, password})=> {
                axios.post('http://localhost:3000/api/user/login',
                {
                    username,
                    password,

                }
                 

            ).then(()=> console.log("udało się!"))
            .catch(()=>console.log("nie udało się :///"))
            
            ;}}
            >
                {()=>(
                 <Container>
                     <SignIn></SignIn>
                </Container>   
                    
                )}
        </Formik>
    </div>
);

export default Login;