import React from "react";
import {Box,Typography,IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import { projectsData } from "../Data";
import Project from "./Project";
const ProjectList = ({projectData,setProjectData,userEmail})=>{
  const handleUpdateProject = (index, updatedProjectData) => {
    // Update the projectData array based on the index
    const updatedProjectDataArray = [...projectData];
    updatedProjectDataArray[index] = updatedProjectData;
    setProjectData(updatedProjectDataArray);
  };
    return( 
        <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h5"> 
        {console.log(projectData)}
        Projects</Typography>
       
        <IconButton onClick={() => setProjectData([...projectData, { name: "", startDate: "", endDate: "", githubLink: "", description: [] }])} size="small" aria-label="add">
          <AddIcon />
        </IconButton>
        {projectData.map((project, index) => ( 
          <Project 
          key={index} 
          projectDetail={project}
          updateProjectData={(updatedProjectData) => handleUpdateProject(index, updatedProjectData)}
          /> 
        ))} 
      </Box>
    )
}

export default ProjectList;