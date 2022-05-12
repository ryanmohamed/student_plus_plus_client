import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
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

        <Route path="/" element={

          !accessToken ?
            <Login sendTokenToParent={sendTokenToParent}/> :
            <h1>Hi</h1>

        }></Route>

        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
    </Router>

    </div>
  );
}

export default App;
