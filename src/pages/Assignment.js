import './Assignments.css';
import react from 'react';
import { useState } from 'react';

function Assignment({courseName, name, dueDate, weight, priority}){
    return (
        <div className="assignment">
            <span class="course-name">{courseName}</span>
            <span class="name">{name}</span>
            <span class="dueDate">{dueDate}</span>
            <span class="weight">?/{weight}</span>
        </div>
      );
}

export default Assignment;