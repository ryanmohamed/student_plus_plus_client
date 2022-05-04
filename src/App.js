import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Landing from './pages/Landing';
import Interface from './pages/Interface';


function App() { 

  const [accessToken, setToken] = useState(null);

  const sendTokenToParent = (token) => {
    setToken(token);
  };
 
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={
          !accessToken ? <Landing sendTokenToParent={sendTokenToParent}/> : <Interface accessToken={accessToken}/>
        } />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
