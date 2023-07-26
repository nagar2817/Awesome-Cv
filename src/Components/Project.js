import React,{useState} from 'react';
import {Box,Typography,TextField,IconButton} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const Project = ({projectData})=>{

    const [projectEditable, setProjectEditable] = useState(false);
  const [projectName, setProjectName] = useState(projectData.name);
  const [projectStartDate, setProjectStartDate] = useState(projectData.startDate);
  const [projectEndDate, setProjectEndDate] = useState(projectData.endDate);
  const [projectGithubLink, setProjectGithubLink] = useState(projectData.githubLink);
  const [projectDescription, setProjectDescription] = useState(projectData.description);

  const handleSaveChangesProject = () => {
    setProjectEditable(false);
    // Save changes for the Project section here
  };

    return (
        <>
<Box sx={{ marginBottom: '40px' }} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!projectEditable ? (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1">{projectName}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ textAlign: 'right' }}>
                    {projectStartDate} - {projectEndDate}
                  </Typography>
                  <a href={projectGithubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Link
                  </a>
                </Box>
              </Box>
            ) : (
              <Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  margin="normal"
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Start Date"
                    value={projectStartDate}
                    onChange={(e) => setProjectStartDate(e.target.value)}
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
                    value={projectEndDate}
                    onChange={(e) => setProjectEndDate(e.target.value)}
                    margin="normal"
                  />
                </Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="GitHub Link"
                  value={projectGithubLink}
                  onChange={(e) => setProjectGithubLink(e.target.value)}
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
                {projectDescription.map((item, index) => (
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
              value={projectDescription.join('\n')}
              onChange={(e) => setProjectDescription(e.target.value.split('\n'))}
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