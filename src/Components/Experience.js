import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton,Card,CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const Experience = ({ experienceDetail, updateExperienceData }) => {
  const [experienceEditable, setExperienceEditable] = useState(false);
  const [currentData, setCurrentData] = useState(experienceDetail);
  const [errors, setErrors] = useState({});


  const handleSaveChangesExperience = () => {
    const newErrors = {};
    if (!currentData.position) {
      newErrors.position = 'Position is required';
    }
    if (!currentData.companyName) {
      newErrors.companyName = 'Company Name is required';
    }
    if (!currentData.location) {
      newErrors.location = 'Location is required';
    }
    if (!currentData.startDate) {
      newErrors.startDate = 'Start Date is required';
    }
    if (!currentData.endDate) {
      newErrors.endDate = 'end date is required';
    }if (!currentData.domain) {
      newErrors.domain = 'Domain is required';
    }
    if (!currentData.bullets) {
      newErrors.bullets = 'Description is required';
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set the state and return
      setErrors(newErrors);
      return;
    }
    setExperienceEditable(false);
    updateExperienceData(currentData);
    // console.log("currentExperienceData", currentData);
  };

  const handleCancel = ()=>{
    setExperienceEditable(false);
  }

  return (
    <Card variant="outlined" sx={{ marginBottom: '40px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
    {/* <Box sx={{ marginBottom: '40px', border: '1px solid #ccc', borderRadius: '5px', padding: '15px' }}> */}
      {!experienceEditable ? (
        <>
          <Typography variant="subtitle1">
            {currentData.position} at {currentData.companyName}
            {!experienceEditable && (
              <IconButton
                onClick={() => setExperienceEditable(true)}
                size="small"
                aria-label="edit"
                sx={{ marginLeft: '10px' }}
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            {currentData.startDate} - {currentData.endDate} | {currentData.location}
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
            {currentData.domain.map(item => (
              <span key={item}>{item}</span>
            ))}
          </Typography>
          <ul>
            {currentData.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <TextField
            variant="outlined"
            fullWidth
            label="Company Name"
            value={currentData.companyName}
            onChange={(e) => setCurrentData({ ...currentData, companyName: e.target.value })}
            margin="normal"
            required
            error={!!errors.companyName}
            helperText={errors.companyName}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Position"
            value={currentData.position}
            onChange={(e) => setCurrentData({ ...currentData, position: e.target.value })}
            margin="normal"
            required
            error={!!errors.position}
            helperText={errors.position}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Start Date"
              value={currentData.startDate}
              onChange={(e) => setCurrentData({ ...currentData, startDate: e.target.value })}
              margin="normal"
              required
              error={!!errors.startDate}
              helperText={errors.startDate}
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
              onChange={(e) => setCurrentData({ ...currentData, endDate: e.target.value })}
              margin="normal"
              required
              error={!!errors.endDate}
              helperText={errors.endDate}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Location"
              value={currentData.location}
              onChange={(e) => setCurrentData({ ...currentData, location: e.target.value })}
              margin="normal"
              required
              error={!!errors.location}
              helperText={errors.location}
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            label="Domain (separated by commas)"
            value={currentData.domain.join(',')}
            onChange={(e) => setCurrentData({ ...currentData, domain: e.target.value.split(',') })}
            margin="normal"
            required
            error={!!errors.domain}
            helperText={errors.domain}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Bullets (separated by commas)"
            value={currentData.bullets.join(',')}
            onChange={(e) => setCurrentData({ ...currentData, bullets: e.target.value.split(',') })}
            margin="normal"
            required
            error={!!errors.bullets}
            helperText={errors.bullets}
          />
        </>
      )}
      {experienceEditable && (
        <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
          <Button variant="contained" color="success" onClick={handleSaveChangesExperience}>Save Changes</Button> 
          <Button variant="contained" color="error" onClick={handleCancel} sx={{ marginLeft: '10px' }}>Cancel</Button>
        </Box>
      )}
    {/* </Box> */}
    </CardContent>
    </Card> 
  )
}

export default Experience;
