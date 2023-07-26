import React from "react";
import {Box,Typography} from '@mui/material';
import { educationData } from "../Data";
import Education from "./Education";

const EducationList = ({educationRef})=>{
    return (
        <Box sx={{ marginBottom: '40px' }} ref={educationRef}>
        <Typography variant="h5">Education</Typography>
        {educationData.map((education, index) => (
          <Education edu={education}/>
        ))}
      </Box>
    )
}

export default EducationList;