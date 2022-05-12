import react from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CoursesUI(){


    const initialValues = {
        courseName: ""
    };

    // const onSubmit = (data) => {
    //     const config = {
    //         email: data.email,
    //         password: data.password
    //     }
    //     axios.post(`http://localhost:3001/auth/signup`, config).then((response) => {
    //         console.log(response);
    //         setMsg(response.data.message || response.data.error);
    //     }); 
    // };

    const validationSchema = Yup.object().shape({
        courseName: Yup.string().required()
    });

    return (
        <div className="CoursesUI ui">
            
            <h1>Courses</h1>

            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form>

                    <label>Course Name: </label>
                    <ErrorMessage name="course" component="span"/>
                    <Field 
                        id="courseName"
                        name="courseName" 
                        type="text"
                        placeholder="(Ex: CS381)"
                    />

                    <button type='submit'> Add Course </button>

                </Form>
            </Formik>

        </div>
      );
}

export default CoursesUI;