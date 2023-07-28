import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import { experienceData } from '../Data';

const Experience = ({experienceDetail,updateExperienceData})=>{
    const [experienceEditable, setExperienceEditable] = useState(false);
  const [currentData,setCurrentData] = useState(experienceDetail);
  
  const handleSaveChangesExperience = () => {
    setExperienceEditable(false);
    // Save changes for the Experience section here
    updateExperienceData(currentData);
    console.log("currenExperienceData",currentData);
  };
    return (
        <>
        { !experienceEditable ?
            <Box sx={{ marginBottom: '40px' }}>
            <Typography variant="subtitle1">
              {currentData.position} at {currentData.companyName} {!experienceEditable && (
              <IconButton
                onClick={() => setExperienceEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            )}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              {currentData.startDate} - {currentData.endDate} | {currentData.location}
            </Typography>
            <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
              {currentData.domain.map(item=><span>{item}</span>)}
            </Typography>
            <ul>
              {currentData.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </Box>     :
          <Box sx={{ marginBottom: '40px' }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Company Name"
            value={currentData.companyName}
            onChange={(e)=>setCurrentData({...currentData, companyName:e.target.value})}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Position"
            value={currentData.position}
            onChange={(e)=>setCurrentData({...currentData, position:e.target.value})}
            margin="normal"
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Start Date"
              value={currentData.startDate}
              onChange={(e)=>setCurrentData({...currentData, startDate:e.target.value})}
              margin="normal"
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: '5px', marginRight: '5px', textAlign: 'center' }}
            >
              -
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              label="End Date"
              value={currentData.endDate}
              onChange={(e)=>setCurrentData({...currentData, endDate:e.target.value})}
              margin="normal"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Location"
              value={currentData.location}
              onChange={(e)=>setCurrentData({...currentData, location:e.target.value})}
              margin="normal"
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            label="Domain"
            value={currentData.domain.join(',')}
            onChange={(e)=>setCurrentData({...currentData, domain:e.target.value.split(',')})}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Bullets (separated by commas)"
            value={currentData.bullets.join(',')}
            onChange={(e)=>setCurrentData({...currentData, bullets:e.target.value.split(',')})}
            margin="normal"
          />
        </Box>
        }
{experienceEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesExperience}>Save Changes</button>
            </Box>
          )}

        </>

    )
}

export default Experience;