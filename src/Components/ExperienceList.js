import React from "react";
import {Box,Typography} from '@mui/material';
import { experienceData } from "../Data";
import Experience from "./Experience";
const ExperienceList = ({experienceRef})=>{
    return (
        <Box sx={{ marginBottom: '40px' }} ref={experienceRef}>
        <Typography variant="h5">Experience</Typography>
        {experienceData.map((experience, index) => (
          <Experience experienceData={experience} key={index} index={index}/>
        ))}
      </Box>
    )
}

export default ExperienceList;