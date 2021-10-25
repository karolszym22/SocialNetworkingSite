import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

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
                    <Form>
                    <Field name="username" type="text"/>
                    <Field name="password" type="password"/>
                    <button type='submit'>Zaloguj się</button>
                    </Form>
                )}
        </Formik>
    </div>
);

export default Login;