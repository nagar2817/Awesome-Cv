import React, { forwardRef } from "react";
import {Box,Typography,IconButton} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
// import { experienceData } from "../Data";
import Experience from "./Experience";

const ExperienceList = forwardRef(({experienceData,setExperienceData},ref)=>{
  const handleExperience = (index, updatedExperienceData) => {
    // Update the projectData array based on the index
    const updatedExperienceDataArray = [...experienceData];
    updatedExperienceDataArray[index] = updatedExperienceData;
    setExperienceData(updatedExperienceDataArray);
  };
    return (
        <Box sx={{ marginBottom: '40px' }} ref={ref}>
        <Typography variant="h5">Experience</Typography>
        <IconButton onClick={() => setExperienceData([...experienceData, { companyName: "", position: "", startDate: "", endDate: "", location: "",domain:[],bullets:[]}])} size="small" aria-label="add">
          <AddIcon />
        </IconButton>
        {experienceData.map((experience, index) => (
          <Experience experienceDetail={experience} key={index} 
          updateExperienceData={(updatedExperienceData)=>handleExperience(index,updatedExperienceData)}
          />
        ))}
      </Box>
    )
})

export default ExperienceList;