import './Interface.css';
import './SidePanel.css'
import react from 'react';
import { useState } from 'react'; 

function SidePanel({passPanel}){

    const [assignmentButton, setAssignmentButton] = useState(false);
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
                <li onClick={handleClick1}>:)</li>
                <li onClick={handleClick2}>:(</li>
            </ul>

        </div>
      );
}

export default SidePanel;