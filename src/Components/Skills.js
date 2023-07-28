import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// const skillsData = {
//   languages: 'Python, Java, JavaScript, C, C++, HTML/CSS, Bash',
//   databases: 'MySQL, PostgreSQL, MongoDB',
//   libraries: 'NumPy, Pandas, OpenCV',
//   frameworks: 'Flask, Django, Node.js, Keras, TensorFlow, PyTorch, Bootstrap, Apache Beam',
//   tools: 'Git, Docker, AWS, GCP, Heroku, JIRA',
// };

const Skill = ({ skillsData,setSkillsData}) => {
  
  const [skillsEditable, setSkillsEditable] = useState(false);
  const [languagesValue, setLanguagesValue] = useState(skillsData[0].languages);
  const [databasesValue, setDatabasesValue] = useState(skillsData[0].databases);
  const [librariesValue, setLibrariesValue] = useState(skillsData[0].libraries);
  const [frameworksValue, setFrameworksValue] = useState(skillsData[0].frameworks);
  const [toolsValue, setToolsValue] = useState(skillsData[0].tools);

  // Function to handle saving changes for Skills section
  const handleSaveChangesSkills = () => {
    setSkillsEditable(false);
    // Save changes for Skills section here
    const updatedSkills = [
      {
        languages : languagesValue,
        databases: databasesValue,
        libraries: librariesValue,
        frameworks : frameworksValue,
        tools: toolsValue
      }
    ]
    console.log("updateed skills",updatedSkills);
    setSkillsData(updatedSkills);
  };

  // ... rest of the code ...

  return (
        <Box sx={{ marginBottom: '40px' }} >
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
                onChange={(e) => setLanguagesValue(e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Databases"
                multiline
                value={databasesValue}
                onChange={(e) => setDatabasesValue(e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Libraries"
                multiline
                value={librariesValue}
                onChange={(e) => setLibrariesValue(e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Frameworks"
                multiline
                value={frameworksValue}
                onChange={(e) => setFrameworksValue(e.target.value)}
                margin="normal"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Tools & Technologies"
                multiline
                value={toolsValue}
                onChange={(e) => setToolsValue(e.target.value)}
                margin="normal"
              />
            </Box>
          )}
          {skillsEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesSkills}>Save Changes</button>
            </Box>
          )}
        </Box>
  );
};

export default Skill;
