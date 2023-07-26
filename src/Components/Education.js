import React,{useState} from "react";
import {Box,Typography,TextField,IconButton} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { educationData } from "../Data";

const Education = ({edu})=>{
    const [educationEditable, setEducationEditable] = useState(false);
    const[degree,setDegree] = useState(edu.degree);
    const[institution,setInstitution] = useState(edu.institution);
    const [location,setLocation] = useState(edu.location);
    const[graduationYear,setGraduationYear] = useState(edu.graduationYear);
    const [gpa, setGpa] = useState(edu.gpa);
   
    const handleSaveChangesEducation = () => {
        setEducationEditable(false);
        // Save changes for the Education section here
      };
    return (
<>
        {!educationEditable ? (
                <Box  sx={{ marginBottom: '20px' }}>
                  <Typography variant="subtitle1">{degree}
                   <IconButton
                onClick={() => setEducationEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Typography>
                  <Typography variant="subtitle2">{institution}</Typography>
                  <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    {location} • {graduationYear} • GPA: {gpa}
                  </Typography>
                </Box>
          ) : (
            <div>
              {educationData.map((education, index) => (
                <Box  sx={{ marginBottom: '20px' }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Degree"
                    value={degree}
                    onChange={(e)=>setDegree(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Institution"
                    value={institution}
                    onChange={(e)=>setInstitution(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Location"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    margin="normal"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Graduation Year"
                      value={graduationYear}
                      onChange={(e)=>setGraduationYear(e.target.value)}
                      margin="normal"
                    />
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="GPA"
                      value={gpa}
                      onChange={(e)=>setGpa(e.target.value)}
                      margin="normal"
                    />
                  </Box>
                </Box>
              ))}
            </div>
          )}
          {educationEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesEducation}>Save Changes</button>
            </Box>
          )}

          </>
    )
}

export default Education;