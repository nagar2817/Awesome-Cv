
import { useAuth0 } from "@auth0/auth0-react";
import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  useEffect(()=>{
    loginWithRedirect();
  })
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <Box sx={{ '& > :not(style)': { m: 1 } } }>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Login 
      </Fab>
    </Box>
    </div>
  );
}