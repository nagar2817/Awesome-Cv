import React, { forwardRef, useState,useEffect } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

const Skill = forwardRef(({ skillsData,setSkillsData},ref) => {
  const [skillsEditable, setSkillsEditable] = useState(false);
  const [editedSkills, setEditedSkills] = useState({ ...skillsData });

  useEffect(() => {
    if (skillsData.length && !skillsEditable) {
      setEditedSkills(skillsData[0]);
    }
  },[skillsEditable,skillsData]); 
  const handleSaveChangesSkills = async () => {
    try {
      setSkillsEditable(false);
      await setSkillsData([editedSkills]);
      toast('🦄 Wow so easy!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch {
      console.log('error while updating skills data');
    }
  };
  const handleChange = (field, value) => {
    setEditedSkills((prevSkills) => ({
      ...prevSkills,
      [field]: value,
    }));
  };


  return (
        <Box sx={{ marginBottom: '40px' }} ref={ref} >
          <Typography variant="h5">
            Skills{' '}
            {!skillsEditable && (
              <IconButton
                onClick={() => setSkillsEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          {!skillsEditable ? (
            <Typography variant="body1">
              <ul>
                <li>
  {console.log(editedSkills)} 
                  <strong>Languages: </strong> {editedSkills.languages}
                </li>
                <li>
                  <strong>Databases: </strong> {editedSkills.databases}
                </li>
                <li>
                  <strong>Libraries: </strong> {editedSkills.libraries}
                </li>
                <li>
                  <strong>Frameworks: </strong> {editedSkills.frameworks}
                </li>
                <li>
                  <strong>Tools & Technologies: </strong> {editedSkills.tools}
                </li>
              </ul>
            </Typography>
          ) : (
            <Box>
              <TextField
                variant="outlined"
                fullWidth
                label="Languages"
                multiline
                value={editedSkills.languages}
                onChange={(e) => handleChange('languages', e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Databases"
                multiline
                value={editedSkills.databases}
                onChange={(e) => handleChange('databases', e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Libraries"
                multiline
                 value={editedSkills.libraries}
            onChange={(e) => handleChange('libraries', e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Frameworks"
                multiline
                value={editedSkills.frameworks}
                onChange={(e) => handleChange('frameworks', e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Tools & Technologies"
                multiline
                value={editedSkills.tools}
                onChange={(e)=>handleChange('tools',e.target.value)}
                margin="normal"
              />
            </Box>
          )}
          {skillsEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <Button variant="contained" color="success" onClick={handleSaveChangesSkills}>Close Changes</Button>

            </Box>
          )}
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
        </Box>
  );
});

export default Skill;
