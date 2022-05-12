import './Interface.css';
import react from 'react';
import { useState } from 'react';
import SidePanel from './SidePanel';
import UI from './UI';

function Interface({accessToken}){

    const [currentPanel, setCurrentPanel] = useState(1);

    const passCurrentPanel = (panel) => {
        setCurrentPanel(panel);
    }

    return (
        <div className="Interface">
            <SidePanel passPanel={passCurrentPanel}/>
            <UI panel={currentPanel} accessToken={accessToken}/>
        </div>
      );
}

export default Interface;