import './Landing.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Landing({ sendTokenToParent }){

  const [username_, setUsername] = useState(null);
  const [password_, setPassword] = useState(null);

  const [errorState, setErrorState] = useState(null);

  function prettify(string){
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.concat('.');
    return string;
  }

  function signUp(){

    const data = { 
      username: username_,
      password: password_
    };

    axios.post("http://localhost:3001/auth/signup", data).then((response) => {

      if(response.data.error) {
        //prettify response text goes here
        setErrorState(prettify(response.data.error));
        console.log(response.data.accessToken);
        sendTokenToParent(null);
      }

      else {
        setErrorState(null);
        sendTokenToParent(response.data.accessToken);
      }

    });
  }

  function login(){

    const data = {
      username: username_,
      password: password_
    };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {

      if(response.data.error) {
         
        setErrorState(prettify(response.data.error));
        sendTokenToParent(null);
      }

      else {
        setErrorState(null);
        sendTokenToParent(response.data.accessToken);
      }

    });

  }

  return (
    <div className="Landing centered-column">
      
    <h1 className="helvetica"> Student++ </h1>

    <div className="field centered-column">
    <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
    <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
    <button onClick={signUp}> Sign Up! </button>
    <button onClick={login}> Log In! </button>
    </div>

    {
      errorState && <p className="helvetica"> {errorState} </p>
    }

    </div>
  );
}

export default Landing;