import react from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AssignmentsUI({accessToken}){

    const initialValues = {
        course: "",
        dueDate: "",
        weight: "",
        difficulty: ""
      };

    const validationSchema = Yup.object().shape({
        courseName: Yup.string().required(),
        dueDate: Yup.string().required(),
        weight: Yup.string().required(),
        difficulty: Yup.string().required()
    });

    return (
        <div className="AssignmentsUI ui">
            
            <h1>Assignments</h1>

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
                    <Field 
                        id="dueDate"
                        name="dueDate" 
                        type="text"
                        placeholder="(Ex: 2022-07-05)"
                    />
                    <Field 
                        id="weight"
                        name="weight" 
                        type="text"
                        placeholder="(Ex: 80)"
                    />
                    <Field 
                        id="difficulty"
                        name="difficulty" 
                        type="text"
                        placeholder="(Ex: 3)"
                    />
                    <button type='submit'> Add Assignment </button>

                </Form>
            </Formik>
        </div>
      );
}

export default AssignmentsUI;