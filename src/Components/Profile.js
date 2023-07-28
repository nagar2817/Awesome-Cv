import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
// import LogoutButton from "./LogoutButton";
import Resume from "./Resume";
import Header from "./Header";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
    {isAuthenticated ?
    <div>
      {console.log(user)}
      <Header user={user} />
<Resume username={user.nickname} userEmail={user.email} />

 </div>
    :
    <LoginButton /> 
    }  
    </>
  );
};

export default Profile;