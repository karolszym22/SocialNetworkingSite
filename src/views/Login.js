import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

const Login = () => 
(
    <div>
        <Formik
            initialValues = {{username: '', password: ''}}
            onSubmit={()=> {axios.post('localhost:3000/api/user/login');}}
            >
                {()=>(
                    <Form>
                    <Field name="username" type="text"/>
                    <Field name="password" type="password"/>
                    <button type='submit'> sign in </button>
                    </Form>
                )}
        </Formik>
    </div>
);

export default Login;