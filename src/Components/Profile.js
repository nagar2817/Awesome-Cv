import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./LogoutButton";
import Resume from "./Resume";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
    {isAuthenticated ?
    <div>
<LogoutButton />    
<Resume />
 </div>
    :
    <LoginButton /> 
    }  
    </>
  );
};

export default Profile;