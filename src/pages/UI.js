import './UI.css'
import react from 'react';
import { useState } from 'react';
import AssignmentsUI from './AssignmentsUI';
import CoursesUI from './CoursesUI';

function UI({panel, accessToken}){

    if(panel === 1){
        return(
            <div className="ui">
                <CoursesUI accessToken={accessToken}/>
            </div>
        );
    }

    else if(panel === 2){
        return(
            <div className="ui">
                <AssignmentsUI accessToken={accessToken}/>
            </div>
        );
    }

}

export default UI;