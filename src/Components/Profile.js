import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import {Box, CircularProgress } from "@mui/material";
import TwitterUploader from "./Twitter";
// import LogoutButton from "./LogoutButton";
import Resume from "./Resume";
import Header from "./Header";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

   if (isLoading) {
    // Show loading spinner while data is being fetched
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
    {isAuthenticated ?
    <div>
      {console.log(user)}
      <Header user={user} />
      {console.log(user.picture)}
      <TwitterUploader image={user.picture} />

<Resume username={user.nickname} />

 </div>
    :
    <LoginButton /> 
    }  
    </>
  );
};

export default Profile;