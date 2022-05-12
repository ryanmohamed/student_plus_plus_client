import './Interface.css';
import react from 'react';
import { useState } from 'react';
import SidePanel from './SidePanel';
import UI from './UI';

function Interface(){

    const [currentPanel, setCurrentPanel] = useState(1);

    const passCurrentPanel = (panel) => {
        setCurrentPanel(panel);
    }

    return (
        <div className="Interface">
            <SidePanel passPanel={passCurrentPanel}/>
            <UI panel={currentPanel}/>
        </div>
      );
}

export default Interface;