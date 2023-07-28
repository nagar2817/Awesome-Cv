import React,{useState} from "react";
import {Box,Typography,TextField,IconButton} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { educationData } from "../Data";

const Education = ({educationDetail,updateEducationDetail})=>{
    const [educationEditable, setEducationEditable] = useState(false);
    // const[currentData.degree,setDegree] = useState(edu.currentData.degree);
    // const[institution,setInstitution] = useState(edu.institution);
    // const [location,setLocation] = useState(edu.location);
    // const[graduationYear,setGraduationYear] = useState(edu.graduationYear);
    // const [gpa, setGpa] = useState(edu.gpa);
   const [currentData,setCurrentData]= useState(educationDetail);
   
      
  const handleEducation = () => {
    setEducationEditable(false);
    // Save changes for the Experience section here
    updateEducationDetail(currentData);
    console.log("currenEducationData",currentData);
  };
      
    return (
<>
        {!educationEditable ? (
                <Box  sx={{ marginBottom: '20px' }}>
                  <Typography variant="subtitle1">{currentData.degree}
                   <IconButton
                onClick={() => setEducationEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Typography>
                  <Typography variant="subtitle2">{currentData.institution}</Typography>
                  <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    {currentData.location} • {currentData.graduationYear} • GPA: {currentData.gpa}
                  </Typography>
                </Box>
          ) : (
            <div>
              
                <Box  sx={{ marginBottom: '20px' }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="currentData.degree"
                    value={currentData.degree}
                    onChange={(e)=>setCurrentData({...currentData,degree:e.target.value})}
                    margin="normal"
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Institution"
                    value={currentData.institution}
                    onChange={(e)=>setCurrentData({...currentData,institution:e.target.value})}
                    margin="normal"
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Location"
                    value={currentData.location}
                    onChange={(e)=>setCurrentData({...currentData,location:e.target.value})}
                    margin="normal"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Graduation Year"
                      value={currentData.graduationYear}
                      onChange={(e)=>setCurrentData({...currentData,graduationYear:e.target.value})}
                      margin="normal"
                    />
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="GPA"
                      value={currentData.gpa}
                      onChange={(e)=>setCurrentData({...currentData,gpa:e.target.value})}
                      margin="normal"
                    />
                  </Box>
                </Box>
              
            </div>
          )}
          {educationEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleEducation}>Save Changes</button>
            </Box>
          )}

          </>
    )
}

export default Education;