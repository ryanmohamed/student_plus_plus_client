import './Entrance.css';
import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function Login({ sendTokenToParent }){

    const [err, setErr] = useState(null);

    const initialValues = {
        email: "",
        password: ""
    };

    const onSubmit = (data) => {
        const config = {
            email: data.email,
            password: data.password
        }
        axios.post(`http://localhost:3001/auth/login`, config).then((response) => {

            //depends on response if we allow access
            if(response.data.error) return setErr(response.data.error); 
            console.log(response.data.accessToken || response.data.error);
            sendTokenToParent(response.data.accessToken);
        });
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    });

    return (
        <div className="loginPage entrance">

            <h1 className="pretty"> Student++ </h1>
        
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
            >
                <Form>

                    <label>Email: </label>
                    <ErrorMessage name="email" component="span"/>
                    <Field 
                        id="emailInput"
                        name="email" //keep the same as database
                        type="email"
                        placeholder="Email"
                    />

                    <label>Password: </label>
                    <ErrorMessage name="password" component="span"/>
                    <Field 
                        id="passwordInput"
                        name="password" 
                        type="password"
                        placeholder="Password"
                    />

                    <button type='submit'> Login </button>

                </Form>
            </Formik>

            { err && <span> {err} </span>}

            <Link to="/signup" className='link pretty'> No account? <span> Sign up here. </span> </Link>
    
        </div>
      );
}

export default Login;