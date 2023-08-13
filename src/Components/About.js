import React,{useState,forwardRef} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = forwardRef(({AboutData,setAboutMeData},ref)=>{
    const [aboutEditable, setAboutEditable] = useState(false);
    // const [aboutValue,setAboutValue] = useState(AboutData);
    
    const saveHandler = ()=>{
        setAboutEditable(false);
        setAboutMeData(AboutData);
          toast("click below to Save!!!")
    }
    return (
    <Box sx={{ marginBottom: '40px' }} ref={ref} >
    <Typography variant="h5">
      About Me{' '}
      {!aboutEditable && (
        <IconButton
          onClick={() => setAboutEditable(true)}
          size="small"
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      )}
    </Typography>
    {!aboutEditable ? (
      <Typography variant="body1"> {AboutData} </Typography>
    ) : (
      <TextField
        variant="outlined"
        fullWidth
        multiline
        value={AboutData}
        onChange={(e) => setAboutMeData(e.target.value)}
        margin="normal"
      />
    )}
    {aboutEditable && (
      <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
        <Button variant="contained" color="success" onClick={() => saveHandler()}>Close Changes</Button>
      </Box>
    )}
  <ToastContainer/>
  </Box>
    )
});

export default About;