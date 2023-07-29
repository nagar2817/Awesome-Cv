import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

const Project = ({ projectDetail, tempDelete, updateProjectData }) => {
  const [currentData, setCurrentData] = useState(projectDetail);
  const [projectEditable, setProjectEditable] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSaveChangesProject = () => {
    const newErrors = {};
    if (!currentData.name) {
      newErrors.name = 'Name is required';
    }
    if (!currentData.startDate) {
      newErrors.startDate = 'Start Date is required';
    }
    if (!currentData.endDate) {
      newErrors.endDate = 'End Date is required';
    }
    if (!currentData.githubLink) {
      newErrors.githubLink = 'GitHub Link is required';
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set the state and return
      setErrors(newErrors);
      return;
    }

    setProjectEditable(false);
    // Save changes for the Project section here
    updateProjectData(currentData);
    console.log("currentData", currentData);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: '40px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {!projectEditable ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1">{currentData.name}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ textAlign: 'right' }}>
                  {currentData.startDate} - {currentData.endDate}
                </Typography>
                {currentData.githubLink && (
                  <Link href={currentData.githubLink} target="_blank" rel="noopener noreferrer">
                    Github Link
                  </Link>
                )}
              </Box>
            </Box>
          ) : (
            <Box>
              <TextField
                variant="outlined"
                fullWidth
                label="Project Name"
                value={currentData.name}
                onChange={(e) => setCurrentData({ ...currentData, name: e.target.value })}
                margin="normal"
                required
                error={!!errors.name}
                helperText={errors.name}
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
              </Box>
              <TextField
                variant="outlined"
                fullWidth
                label="GitHub Link"
                value={currentData.githubLink}
                onChange={(e) => setCurrentData({ ...currentData, githubLink: e.target.value })}
                margin="normal"
                required
                error={!!errors.githubLink}
                helperText={errors.githubLink}
              />
            </Box>
          )}
          {!projectEditable && (
            <IconButton
              onClick={() => setProjectEditable(true)}
              size="small"
              aria-label="edit"
              sx={{ marginLeft: '10px' }}
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>
        {!projectEditable ? (
          <Typography variant="body1" sx={{ marginRight: '10px' }}>
            <ul>
              {currentData.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>
        ) : (
          <TextField
            variant="outlined"
            fullWidth
            multiline
            label="Project Description"
            value={currentData.description.join('\n')}
            onChange={(e) => setCurrentData({ ...currentData, description: e.target.value.split('\n') })}
            margin="normal"
            required
            error={!!errors.description}
            helperText={errors.description}
          />
        )}
        {projectEditable && (
          <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
            <Button variant="contained" color="success" onClick={handleSaveChangesProject}>Save Changes</Button>
            <Button variant="contained" color="error" onClick={() => setProjectEditable(false)} sx={{ marginLeft: '10px' }}>Cancel</Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default Project;
