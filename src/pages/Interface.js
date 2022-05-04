import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing.js';
import axios from 'axios';

function Interface({accessToken}){

  const [username, setUsername] = useState();

  useEffect(() => {

    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    }
    axios.get(`http://localhost:3001/users`, config).then((response) => {
      setUsername(response.data.username);
    }); 

  }, [accessToken]);

  return (
    <div className="Interface">
       
       <h1> Welcome {username}! </h1>

    </div>
  );
}

export default Interface;