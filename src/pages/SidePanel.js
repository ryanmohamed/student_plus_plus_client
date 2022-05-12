import './Interface.css';
import './SidePanel.css'
import react from 'react';
import { useState } from 'react'; 

function SidePanel({passPanel}){

    const [coursesButton, setCoursesButton] = useState(true);
    const [assignmentButton, setAssignmentButton] = useState(false);
    const [priorityListButton, setPriorityListButton] = useState(false);
    const [goalsButton, setGoalsButton] = useState(false);
    const [settingsButton, setSettingsButton] = useState(false);
    const [tagsButton, setTagsButton] = useState(false);

    const handleClick1 = () => {
        setCoursesButton(true);
        setAssignmentButton(false);
        setPriorityListButton(false);
        setGoalsButton(false);
        setSettingsButton(false);
        setTagsButton(false);
        passPanel(1);
    }

    const handleClick2 = () => {
        setCoursesButton(false);
        setAssignmentButton(true);
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
                <li className={coursesButton && "active"} onClick={handleClick1}>👨‍🏫</li>
                <li className={assignmentButton && "active"} onClick={handleClick2}>📓</li>
                <li className={priorityListButton && "active"} onClick={handleClick3}>Placeholder</li>
                <li className={goalsButton && "active"} onClick={handleClick4}>Placeholder</li>
                <li className={settingsButton && "active"} onClick={handleClick5}>Placeholder</li>
                <li className={tagsButton && "active"} onClick={handleClick6}>Placeholder</li>

            </ul>

        </div>
      );
}

export default SidePanel;