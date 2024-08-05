import Login from './components/login'
import Logout from './components/logout'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {
          isAuthenticated ? (<Logout/>) : (<Login/>)
        }
      </header>
    </div>
  );
}

export default App;
