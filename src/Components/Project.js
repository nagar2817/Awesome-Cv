import React,{useState} from 'react';
import {Box,Typography,TextField,IconButton} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const Project = ({projectDetail,updateProjectData})=>{
  const [currentData,setCurrentData] = useState(projectDetail);
  const [projectEditable, setProjectEditable] = useState(false);

  const handleSaveChangesProject = async () => {
    setProjectEditable(false);
    // Save changes for the Project section here
    updateProjectData(currentData);
    console.log("currentData",currentData);
  };

    return (
        <>
<Box sx={{ marginBottom: '40px' }} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!projectEditable ? (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1">
                  {/* {console.log("projectDetails",projectDetail)} */}
                  {currentData.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ textAlign: 'right' }}>
                    {currentData.startDate} - {currentData.endDate}
                  </Typography>
                  <a href={currentData.githubLink} target="_blank" rel="noopener noreferrer">
                    {currentData.githubLink ? "Github Link":""}
                  </a>
                </Box>
              </Box>
            ) : (
              <Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Project Name"
                  value={currentData.name}
                  onChange={(e) => setCurrentData({...currentData, name:e.target.value } )}
                  margin="normal"
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Start Date"
                    value={currentData.startDate}
                    onChange={(e) => setCurrentData( {...currentData, startDate:e.target.value})}
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
                    onChange={(e) => setCurrentData({...currentData, endDate:e.target.value})}
                    margin="normal"
                  />
                </Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="GitHub Link"
                  value={currentData.githubLink}
                  onChange={(e) => setCurrentData({...currentData, githubLink:e.target.value})}
                  margin="normal"
                />
              </Box>
            )}
            {!projectEditable && (
              <IconButton
                onClick={() => setProjectEditable(true)}
                size="small"
                aria-label="edit"
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
              onChange={(e) => setCurrentData({...currentData, description:e.target.value.split('\n')})}
              margin="normal"
            />
          )}
          {projectEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesProject}>Save Changes</button>
            </Box>
          )}
        </Box>
        </>
    )
}

export default Project;