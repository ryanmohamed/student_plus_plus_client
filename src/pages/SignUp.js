import './Entrance.css';
import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function SignUp(){

    const [msg, setMsg] = useState(null);

    const initialValues = {
        email: "",
        password: ""
    };

    const onSubmit = (data) => {
        const config = {
            email: data.email,
            password: data.password
        }
        axios.post(`http://localhost:3001/auth/signup`, config).then((response) => {
            console.log(response);
            setMsg(response.data.message || response.data.error);
        }); 
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    });

    return (
        <div className="signUpPage entrance">
        
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

                    <button type='submit'> Sign Up! </button>

                </Form>
            </Formik>


            { msg && <span> {msg} </span>}
            
            <Link to="/" className='link pretty'> Login </Link>
    
        </div>
      );
}

export default SignUp;