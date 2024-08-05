import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { ThemeContext } from '../App';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`login-page ${theme}`}>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginButton;
