import React,{useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
// import { AboutData } from '../Data';

const About = ({AboutData,setAboutMeData})=>{
    const [aboutEditable, setAboutEditable] = useState(false);
    const [aboutValue,setAboutValue] = useState(AboutData);
    
    const saveHandler = ()=>{
        setAboutEditable(false);
        setAboutMeData(aboutValue);
    }
    return (
    <Box sx={{ marginBottom: '40px' }} >
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
      <Typography variant="body1">
  {/* {console.log(aboutValue)} */}
        {AboutData}</Typography>
    ) : (
      <TextField
        variant="outlined"
        fullWidth
        multiline
        value={aboutValue}
        onChange={(e) => setAboutValue(e.target.value)}
        margin="normal"
      />
    )}
    {aboutEditable && (
      <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
        <Button variant="contained" color="success" onClick={() => saveHandler()}>Close Changes</Button>
      </Box>
    )}
  </Box>
    )
}

export default About;