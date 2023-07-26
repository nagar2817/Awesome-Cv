import React,{useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { AboutData } from '../Data';

const About = ({aboutRef})=>{
    const [aboutEditable, setAboutEditable] = useState(false);
    const [aboutValue,setAboutValue] = useState(AboutData);
    const saveHandler = ()=>{
        setAboutEditable(false);
    }
    return (
    <Box sx={{ marginBottom: '40px' }} ref={aboutRef}>
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
      <Typography variant="body1">{aboutValue}</Typography>
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
        <button onClick={() => saveHandler()}>Save Changes</button>
      </Box>
    )}
  </Box>
    )
}

export default About;