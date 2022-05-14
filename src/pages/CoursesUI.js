import './UI.css';
import './CoursesUI.css';
import react from 'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function CoursesUI({accessToken}){

    const [courses, setCourses] = useState([]);

    const getCourses = () => {

        const headers = {
            'authorization' : `Bearer ${accessToken}`
        }

        axios.get(`http://localhost:3001/courses/`, {
            headers: headers
        }).then((response) => {
            setCourses(response.data);
        }); 

    }

    useEffect(() => {
        getCourses();
    }, [courses]);

    const initialValues = {
        courseName: ""
    };

    const onSubmit = (data) => {

        const headers = {
            'content-type' : 'application/json',
            'authorization' : `Bearer ${accessToken}`
        }

        const config = {
            name: data.courseName
        }

        axios.post(`http://localhost:3001/courses/create`, config, {
            headers: headers
        }).then((response) => {
            getCourses();
        }); 

    };

    const validationSchema = Yup.object().shape({
        courseName: Yup.string().required()
    });

    return (
        <div className="CoursesUI ui">
            
            <h1>Courses</h1>

            <h3> Add a course: </h3>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>

                    <label>Course Name: </label>
                    <ErrorMessage name="courseName" component="span"/>
                    <Field 
                        id="courseName"
                        name="courseName" 
                        type="text"
                        placeholder="(Ex: CS381)"
                    />

                    <button type='submit'> Add Course </button>

                </Form>
            </Formik>

            <div className="course-container">
                { courses && courses.map((course, index) => (
                        <p className="course" key={index}> {index+1}: {course.name} </p> ))
                }
            </div>
            

        </div>
      );
}

export default CoursesUI;