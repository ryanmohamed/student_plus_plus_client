import './Interface.css';
import './SidePanel.css'
import react from 'react';
import { useState } from 'react'; 

function SidePanel({passPanel}){

    const [assignmentButton, setAssignmentButton] = useState(true);
    const [coursesButton, setCoursesButton] = useState(false);
    const [priorityListButton, setPriorityListButton] = useState(false);
    const [goalsButton, setGoalsButton] = useState(false);
    const [settingsButton, setSettingsButton] = useState(false);
    const [tagsButton, setTagsButton] = useState(false);

    const handleClick1 = () => {
        setAssignmentButton(true);
        setCoursesButton(false);
        setPriorityListButton(false);
        setGoalsButton(false);
        setSettingsButton(false);
        setTagsButton(false);
        passPanel(1);
    }

    const handleClick2 = () => {
        setCoursesButton(true);
        setAssignmentButton(false);
        setPriorityListButton(false);
        setGoalsButton(false);
        setSettingsButton(false);
        setTagsButton(false);
        passPanel(2);
    }

    const handleClick3 = () => {
        setPriorityListButton(true);
        setCoursesButton(false);
        setAssignmentButton(false);
        setGoalsButton(false);
        setSettingsButton(false);
        setTagsButton(false);
        passPanel(3);
    }

    const handleClick4 = () => {
        setGoalsButton(true);
        setCoursesButton(false);
        setAssignmentButton(false);
        setPriorityListButton(false);
        setSettingsButton(false);
        setTagsButton(false);
        passPanel(4);
    }

    const handleClick5 = () => {
        setSettingsButton(true);
        setAssignmentButton(false);
        setCoursesButton(false);
        setPriorityListButton(false);
        setGoalsButton(false);
        setTagsButton(false);
        passPanel(5);
    }

    const handleClick6 = () => {
        setTagsButton(true);
        setAssignmentButton(false);
        setCoursesButton(false);
        setPriorityListButton(false);
        setGoalsButton(false);
        setSettingsButton(false);
        passPanel(6);
    }

    return (
        <div className="side-panel">

            <ul>
                <li className={assignmentButton && "active"} onClick={handleClick1}>📓</li>
                <li className={coursesButton && "active"} onClick={handleClick2}>👨‍🏫</li>
                <li className={priorityListButton && "active"} onClick={handleClick3}>Placeholder</li>
                <li className={goalsButton && "active"} onClick={handleClick4}>Placeholder</li>
                <li className={settingsButton && "active"} onClick={handleClick5}>Placeholder</li>
                <li className={tagsButton && "active"} onClick={handleClicks6}>Placeholder</li>

            </ul>

        </div>
      );
}

export default SidePanel;