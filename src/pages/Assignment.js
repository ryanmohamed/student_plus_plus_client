import './Assignments.css';
import react from 'react';
import { useState } from 'react';

function Assignment({courseName, name, dueDate, weight, priority}){
    
    const [active, setActive] = useState(false);

    const off = () => { setActive(false) };
    const on = () => { setActive(true) }

    return (
        <div className={active ? "assignment touched-assignment" : "assignment"} onMouseOver={on} onMouseLeave={off}>
            <span class="course-name">{courseName}</span>
            <span class="name">{name}</span>
            <span class="dueDate">{dueDate}</span>
            <span class="weight">?/{weight}</span>
            {active && <button>Update</button>}
        </div>
      );
}

export default Assignment;