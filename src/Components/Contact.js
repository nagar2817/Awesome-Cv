import React,{useState,useEffect} from 'react';
import {ContactData} from '../Data';
import axios from 'axios';
import { Box,TextField,Typography,IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Contact = ({username})=>{
    const [contactEditable, setContactEditable] = useState(false);
  const [contactData, setContactData] = useState(ContactData);
  // setContactData({...contactData,username:username});

  useEffect(() => {
    // Fetch user data from the server when the component mounts
    fetchUserData();
    // setContactData({contactData}); 
  }, []);

  const fetchUserData = async () => {
    try {
      // Make an API call to your Express server endpoint with the username
      const response = await axios.get(`http://localhost:5000/usersinfo/${username}`);

      // If the API call is successful, update the state with the user data
      setContactData(response.data);
      console.log("contact info",response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to handle saving changes for the Contact section
  const handleSaveChangesContact = async () => {
    setContactEditable(false);
    // Save changes for the Contact section here
    try{
      const response = await axios.post('http://localhost:5000/usersinfo',contactData);
      console.log(response.data);
      // setContactData(response.data);
    }catch(error){
      console.log('error while updating',error);
    }
  };
    return (
      <Box sx={{ marginBottom: '40px' }} >
          <Typography variant="h5">
            Contact{' '}
            {!contactEditable && (
              <IconButton
                onClick={() => setContactEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          {!contactEditable ? (
            <div>
              <Typography variant="body1">Username: {contactData.username}</Typography>
              <Typography variant="body1">Name: {contactData.firstname} {contactData.lastname}</Typography>
              <Typography variant="body1">Email: {contactData.email}</Typography>
              <Typography variant="body1">Phone Number: {contactData.phonenumber}</Typography>
              <Typography variant="body1">Address: {contactData.address}</Typography>

            </div>
          ) : (
            <div>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                value={contactData.username}
                onChange={(e) => setContactData({ ...contactData, username: e.target.value })}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="First Name"
                value={contactData.firstname}
                onChange={(e) => setContactData({ ...contactData, firstname: e.target.value })}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                value={contactData.lastname}
                onChange={(e) => setContactData({ ...contactData, lastname: e.target.value })}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Phone Number"
                value={contactData.phonenumber}
                onChange={(e) => setContactData({ ...contactData, phonenumber: e.target.value })}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Address"
                value={contactData.address}
                onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                margin="normal"
              />
            </div>
          )}
          {contactEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesContact}>Save Changes</button>
            </Box>
          )}
        </Box>
    )
}

export default Contact;