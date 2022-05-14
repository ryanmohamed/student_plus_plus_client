import react from 'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AssignmentsUI({accessToken}){

    const [assignments, setAssignments] = useState([]);
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

    useEffect(() => {
        getAssignments();
    }, []);

    const initialValues = {
        course: "",
        id: "",
        dueDate: "",
        weight: "",
        difficulty: ""
      };

    const validationSchema = Yup.object().shape({
        course: Yup.string().required(),
        id: Yup.string().required(),
        dueDate: Yup.string().required(),
        weight: Yup.number().required().positive(),
        difficulty: Yup.number().required().positive().integer().min(1).max(5)
    });

    const onSubmit = (data) =>{
        const headers = {
            'content-type' : 'application/json',
            'authorization' : `Bearer ${accessToken}`
        }

        const config = {
            course: data.course,
            id: data.id,
            dueDate: data.dueDate,
            weight: data.weight,
            difficulty: data.difficulty
        }
        axios.post(`http://localhost:3001/assignments/create`, config, {
            headers: headers
        }).then((response) => {
            if(response.data.error) setErr(response.data.error);
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
                <Form>

                    <label>Course Name: </label>
                    <ErrorMessage name="course" component="span"/>
                    <Field 
                        id="course"
                        name="course" 
                        type="text"
                        placeholder="(Ex: CS381)"
                    />

                    <label>Name: </label>
                    <ErrorMessage name="id" component="span"/>
                    <Field 
                        id="id"
                        name="id" 
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

                    <label>Weight: </label>
                    <ErrorMessage name="weight" component="span"/>
                    <Field 
                        id="weight"
                        name="weight" 
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

                    <button type='submit'> Add Assignment </button>

                </Form>
            </Formik>

            <p>{err ? err : undefined}</p>

            <div className="assignment-container">
                { assignments && 
                        <p> {JSON.stringify(assignments[0])} </p> 
                }
            </div>
            

        </div>
      );
}

export default AssignmentsUI;