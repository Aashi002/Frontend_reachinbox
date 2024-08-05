import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import Profile from './Profile' ;
import { ThemeContext } from '../App';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`logout-page ${theme}`}>
    <button onClick={() => logout()} style={{ marginBottom: '20px' }}>
      Log Out
    </button>
        <Profile/>
    </div>
  );
};

export default LogoutButton;
