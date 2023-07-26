import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { experienceData } from '../Data';

const Experience = ({experienceData,index})=>{
    const [experienceEditable, setExperienceEditable] = useState(false);
  const [companyName, setCompanyName] = useState(experienceData.companyName);
  const [position, setPosition] = useState(experienceData.position);
  const [startDate, setStartDate] = useState(experienceData.startDate);
  const [endDate, setEndDate] = useState(experienceData.endDate);
  const [location, setLocation] = useState(experienceData.location);
  const [domain, setDomain] = useState(experienceData.domain);
  const [bullets,setBullets] = useState(experienceData.bullets);

  
  const handleSaveChangesExperience = () => {
    setExperienceEditable(false);
    // Save changes for the Experience section here
  };
    return (
        <>
        { !experienceEditable ?
            <Box sx={{ marginBottom: '40px' }}>
            <Typography variant="subtitle1">
              {position} at {companyName} {!experienceEditable && (
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
              {startDate} - {endDate} | {location}
            </Typography>
            <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
              {domain.map(item=><span>{item}</span>)}
            </Typography>
            <ul>
              {bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </Box>     :
          <Box sx={{ marginBottom: '40px' }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Company Name"
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Position"
            value={position}
            onChange={(e)=>setPosition(e.target.value)}
            margin="normal"
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Start Date"
              value={startDate}
              onChange={(e)=>setStartDate(e.target.value)}
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
              value={endDate}
              onChange={(e)=>setEndDate(e.target.value)}
              margin="normal"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Location"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              margin="normal"
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            label="Domain"
            value={domain}
            onChange={(e)=>setDomain(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Bullets (separated by commas)"
            value={bullets.join(', ')}
            onChange={(e)=>setBullets(e.target.value)}
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