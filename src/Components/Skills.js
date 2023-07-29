import React, { forwardRef, useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

const Skill = forwardRef(({ skillsData,setSkillsData},ref) => {
  console.log("passed skills datainto skills section",typeof skillsData);
  let languagesValue = '';
  let databasesValue = '';
  let frameworksValue= '';
  let librariesValue = '';
  let toolsValue = '';

  if(skillsData.length){
     languagesValue = skillsData[0].languages;
     databasesValue = skillsData[0].databases;
     frameworksValue = skillsData[0].frameworks;
     librariesValue = skillsData[0].libraries;
    toolsValue = skillsData[0].tools;

  }
  const [skillsEditable, setSkillsEditable] = useState(false);
  console.log("passed langauages data",languagesValue);

  // Function to handle saving changes for Skills section 
  const handleSaveChangesSkills = () => {
    setSkillsEditable(false);
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
  {console.log(skillsData)}
                  <strong>Languages: </strong> {languagesValue}
                </li>
                <li>
                  <strong>Databases: </strong> {databasesValue}
                </li>
                <li>
                  <strong>Libraries: </strong> {librariesValue}
                </li>
                <li>
                  <strong>Frameworks: </strong> {frameworksValue}
                </li>
                <li>
                  <strong>Tools & Technologies: </strong> {toolsValue}
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
                value={languagesValue}
                onChange={(e) => setSkillsData([{...skillsData, languages:e.target.value}])}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Databases"
                multiline
                value={databasesValue}
                onChange={(e) =>  setSkillsData([{...skillsData, databases:e.target.value}])}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Libraries"
                multiline
                value={librariesValue}
                onChange={(e) => setSkillsData([{...skillsData, libraries:e.target.value}])}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Frameworks"
                multiline
                value={frameworksValue}
                onChange={(e) =>  setSkillsData([{...skillsData, frameworks:e.target.value}])}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Tools & Technologies"
                multiline
                value={toolsValue}
                onChange={(e) =>  setSkillsData([{...skillsData, tools:e.target.value}])}
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
