import React from "react";
import {Box,Typography} from '@mui/material'
import { projectsData } from "../Data";
import Project from "./Project";
const ProjectList = ({projectsRef})=>{
    return(
        <Box sx={{ marginBottom: '40px' }} ref={projectsRef}>
        <Typography variant="h5">Projects</Typography>
        {projectsData.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
      </Box>
    )
}

export default ProjectList;