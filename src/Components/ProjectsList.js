import React, { forwardRef } from "react";
import {Box,Typography,IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Project from "./Project";
const ProjectList = forwardRef(({projectData,setProjectData,userEmail},ref)=>{
  const handleUpdateProject = (index, updatedProjectData) => {
    const updatedProjectDataArray = [...projectData];
    updatedProjectDataArray[index] = updatedProjectData;
    setProjectData(updatedProjectDataArray);
  };
  const handleTempDelete = (index)=>{ 
    const updatedProjectDataArray = projectData.filter((_, i) => i !== index);
    console.log(index);
    setProjectData(updatedProjectDataArray); 
  }
    return( 
        <Box sx={{ marginBottom: '40px' }} ref={ref}>
        <Typography variant="h5"> 
        {/* {console.log(projectData)} */}
        Projects</Typography>
       
        <IconButton onClick={() => setProjectData([...projectData, { name: "", startDate: "", endDate: "", githubLink: "", description: [] }])} size="small" aria-label="add">
          <AddIcon />
        </IconButton>
        {projectData.map((project, index) => ( 
          <Project 
          key={index} 
          projectDetail={project}
          updateProjectData={(updatedProjectData) => handleUpdateProject(index, updatedProjectData)}
          tempDelete={()=>handleTempDelete(index-1)}
          /> 
        ))} 
      </Box>
    )
})

export default ProjectList;