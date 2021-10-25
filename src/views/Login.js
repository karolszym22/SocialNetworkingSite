import React from 'react';
import axios from 'axios';
import { Formik} from 'formik';
import SignIn from '../components/organisms/LoginPanel';
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
                    <SignIn></SignIn>
                )}
        </Formik>
    </div>
);

export default Login;