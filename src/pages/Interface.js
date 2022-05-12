import './Interface.css';
import react from 'react';
import { useState } from 'react';
import SidePanel from './SidePanel';

function Interface(){

    const [currentPanel, setCurrentPanel] = useState(1);

    const passCurrentPanel = (panel) => {
        setCurrentPanel(panel);
    }

    return (
        <div className="Interface">
            <SidePanel passPanel={passCurrentPanel}/>
            <div className="ui">

                { currentPanel && <p> { currentPanel } </p>}

            </div>


        </div>
      );
}

export default Interface;