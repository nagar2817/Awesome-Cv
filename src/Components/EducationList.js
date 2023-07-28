import React, { forwardRef } from "react";
import {Box,Typography,IconButton} from '@mui/material';
// import { educationData } from "../Data";
import AddIcon from "@mui/icons-material/Add";
import Education from "./Education";

const EducationList = forwardRef(({educationRef,educationData,setEducationData},ref)=>{
  const handleEducationDetail = (index, updatedEducationDetail) => {
    // Update the projectData array based on the index
    const updatedProjectDataArray = [...educationData];
    updatedProjectDataArray[index] = updatedEducationDetail;
    setEducationData(updatedProjectDataArray);
  };
    return (
        <Box sx={{ marginBottom: '40px' }} ref={ref}>
        <Typography variant="h5">Education</Typography>
        <IconButton onClick={() => setEducationData([...educationData, { degree: "", institution: "", graduationYear: "", location: "", gpa: ""}])} size="small" aria-label="add">
          <AddIcon />
        </IconButton>
        {educationData.map((education, index) => (
          <Education educationDetail={education} key={index}
          updateEducationDetail={(updatedEducationDetail)=>handleEducationDetail(index,updatedEducationDetail)}
          />
        ))}
      </Box>
    )
})

export default EducationList;