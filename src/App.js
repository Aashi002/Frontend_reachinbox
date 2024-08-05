import React, { useState, createContext, useContext }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Onebox from './components/Onebox';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const { isAuthenticated } = useAuth0();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`App ${theme}`}>
          <header className="App-header">
            <button onClick={toggleTheme}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/onebox" element={<Onebox />} />
              <Route path="/" element={isAuthenticated ? <Profile /> : <Login />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

