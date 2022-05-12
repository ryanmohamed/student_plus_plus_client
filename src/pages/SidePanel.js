import './Interface.css';
import './SidePanel.css'
import react from 'react';
import { useState } from 'react'; 

function SidePanel({passPanel}){

    const [assignmentButton, setAssignmentButton] = useState(true);
    const [coursesButton, setCoursesButton] = useState(false);

    const handleClick1 = () => {
        setAssignmentButton(true);
        setCoursesButton(false);
        passPanel(1);
    }

    const handleClick2 = () => {
        setCoursesButton(true);
        setAssignmentButton(false);
        passPanel(2);
    }

    return (
        <div className="side-panel">

            <ul>
                <li className={assignmentButton && "active"} onClick={handleClick1}>📓</li>
                <li className={coursesButton && "active"} onClick={handleClick2}>👨‍🏫</li>
            </ul>

        </div>
      );
}

export default SidePanel;