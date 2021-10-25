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
                    console.log("sdsds")
                )}
        </Formik>
    </div>
);

export default Login;