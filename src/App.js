import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Interface from './pages/Interface';


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
            <Interface accessToken={accessToken}/>

        }></Route>

        <Route path="/signup" element={<SignUp />}></Route>

      </Routes>
    </Router>

    </div>
  );
}

export default App;
