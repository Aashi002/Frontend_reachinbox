import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Profile from './profile'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
        <button onClick={() => logout()} style={{marginBottom:'20px'}}>Log Out</button >
        <Profile/>
    </div>
  );
};

export default LogoutButton;