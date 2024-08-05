import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate= useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const handleNavigation = () => {
    navigate('/Onebox'); // Replace '/some-path' with your target path
  };

  return (
    isAuthenticated && (
      <div>
        <h2>Onebox Page</h2>
        <button onClick={handleNavigation}>Go to Same Page</button>
        {/* <img src={user.picture} alt={user.name} /> */}
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
