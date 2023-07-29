import React, { forwardRef, useState } from 'react';
import { Box, Grid, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';


// const skillsData = {
//   languages: 'Python, Java, JavaScript, C, C++, HTML/CSS, Bash',
//   databases: 'MySQL, PostgreSQL, MongoDB',
//   libraries: 'NumPy, Pandas, OpenCV',
//   frameworks: 'Flask, Django, Node.js, Keras, TensorFlow, PyTorch, Bootstrap, Apache Beam',
//   tools: 'Git, Docker, AWS, GCP, Heroku, JIRA',
// };

const Skill = forwardRef(({ skillsData,setSkillsData},ref) => {
  // console.log(skillsData);
  const [skillsEditable, setSkillsEditable] = useState(false);
  const [languagesValue, setLanguagesValue] = useState(skillsData.length === 0 ? '': skillsData[0].languages);
  const [databasesValue, setDatabasesValue] = useState(skillsData.length === 0 ? '': skillsData[0].databases);
  const [librariesValue, setLibrariesValue] = useState(skillsData.length === 0 ? '': skillsData[0].libraries);
  const [frameworksValue, setFrameworksValue] = useState(skillsData.length === 0 ? '': skillsData[0].frameworks);
  const [toolsValue, setToolsValue] = useState(skillsData.length === 0 ? '': skillsData[0].tools);

  // Function to handle saving changes for Skills section
  const handleSaveChangesSkills = () => {
    setSkillsEditable(false);
    // Save changes for Skills section here
    // const updatedSkills = [
    //   {
    //     languages : languagesValue,
    //     databases: databasesValue,
    //     libraries: librariesValue,
    //     frameworks : frameworksValue,
    //     tools: toolsValue
    //   }
    // ]
    // console.log("updateed skills",updatedSkills);
    setSkillsData(skillsData);
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

  // ... rest of the code ...

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
                onChange={(e) => setSkillsData({...skillsData,languages:e.target.value})}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Databases"
                multiline
                value={databasesValue}
                onChange={(e) => setSkillsData({...skillsData,databases:e.target.value})}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Libraries"
                multiline
                value={librariesValue}
                onChange={(e) => setSkillsData({...skillsData,libraries:e.target.value})}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Frameworks"
                multiline
                value={frameworksValue}
                onChange={(e) => setSkillsData({...skillsData,frameworks:e.target.value})}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Tools & Technologies"
                multiline
                value={toolsValue}
                onChange={(e) => setSkillsData({...skillsData,tools:e.target.value})}
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
{/* Same as */}
<ToastContainer />
        </Box>
  );
});

export default Skill;
