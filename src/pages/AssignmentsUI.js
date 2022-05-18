import react from 'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import Assignment from './Assignment';
import * as Yup from 'yup';
import axios from 'axios';

function AssignmentsUI({accessToken}){

    const [assignments, setAssignments] = useState([]);
    const [categories, setCategories] = useState([]);
    const [err, setErr] = useState(null);


    const getAssignments = async () => {
        const headers = {
            'authorization' : `Bearer ${accessToken}`
        }

        axios.get(`http://localhost:3001/assignments/`, {
            headers: headers
        }).then((response) => {
            setAssignments(response.data);
        });
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log("Hi!");
    }

    useEffect(() => {
        getAssignments();
    }, []);

    const initialValues = {
        course: "",
        name: "",
        dueDate: "",
        perfectScore: "",
        difficulty: "",
        courseCategory: ""
      };

    const validationSchema = Yup.object().shape({
        course: Yup.string().required(),
        name: Yup.string().required(),
        dueDate: Yup.string().required(),
        perfectScore: Yup.number().required().positive(),
        difficulty: Yup.number().required().positive().integer().min(1).max(5),
        courseCategory: Yup.string()
    });

    const onSubmit = (data) =>{
        const headers = {
            'content-type' : 'application/json',
            'authorization' : `Bearer ${accessToken}`
        }

        const config = {
            course: data.course,
            name: data.name,
            dueDate: data.dueDate,
            perfectScore: data.perfectScore,
            difficulty: data.difficulty,
            courseCategory: data.courseCategory
        }
        axios.post(`http://localhost:3001/assignments/create`, config, {
            headers: headers
        }).then((response) => {
            if(response.data.error) return setErr(response.data.error);
            else {
                console.log(response.data);
                setErr(null);
            }
            getAssignments();
        }); 
    } 

    return (
        <div className="AssignmentsUI ui">
            
            <h1>Assignments</h1>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                
                {({values, handleChange, handleBlur, handleSubmit }) => (

                    <Form>
                    <label>Course Name: </label>
                    <ErrorMessage name="course" component="span"/>
                    <Field 
                        id="course"
                        name="course" 
                        type="text"
                        placeholder="(Ex: CS381)"
                        value={values.course}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <label>Name: </label>
                    <ErrorMessage name="name" component="span"/>
                    <Field 
                        id="name"
                        name="name" 
                        type="text"
                        placeholder="(Ex: HW1)"
                    />

                    <label>Due Date: </label>
                    <ErrorMessage name="dueDate" component="span"/>
                    <Field 
                        id="dueDate"
                        name="dueDate" 
                        type="text"
                        placeholder="(Ex: 2022-07-05)"
                    />

                    <label>perfectScore: </label>
                    <ErrorMessage name="perfectScore" component="span"/>
                    <Field 
                        id="perfectScore"
                        name="perfectScore" 
                        type="text"
                        placeholder="(Ex: 100, 5, 80)"
                    />

                    <label>Difficulty Name: </label>
                    <ErrorMessage name="difficulty" component="span"/>
                    <Field 
                        id="difficulty"
                        name="difficulty" 
                        type="text"
                        placeholder="(Hardest - 5, Easiest - 1)"
                    />

                    <label>Course Category: </label>
                    <ErrorMessage name="courseCategory" component="span"/>
                    <Field 
                        id="courseCategory"
                        name="courseCategory" 
                        type="text"
                        placeholder="A category you entered for course... (quiz, hw, etc)"
                    />

                    <button type='submit'> Add Assignment </button>

                    </Form>

                )}
                
                
            </Formik>

            <span class="error">{err ? err : undefined}</span>

            <div className="assignment-container">
                { assignments.map(assignment => {
                            const courseName = assignment.courseName;
                            const name = assignment.name;
                            const dueDate = assignment.dueDate;
                            const weight = assignment.perfectScore;
                            const priority = 1;
                            const scoreRecieved = assignment.scoreRecieved;
                            return <Assignment 
                                courseName={courseName}
                                name={name}
                                dueDate={dueDate}
                                perfectScore={weight}
                                priority={priority}
                                scoreRecieved={scoreRecieved}
                                />
                })
                }
            </div>
            

        </div>
      );
}

export default AssignmentsUI;