import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Landing from './pages/Landing';
import Interface from './pages/Interface';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() { 

  const [accessToken, setToken] = useState(null);

  useEffect(() => {
    setToken(Cookies.get('refreshToken'));
  }, []);

  const sendTokenToParent = (token) => {
    setToken(token);
  };
  
  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
    </Router>

    </div>
  );
}

export default App;
