// import React,{useState} from "react";
// import {Box,Typography,TextField,IconButton} from '@mui/material';
// import EditIcon from "@mui/icons-material/Edit";
// import Button from '@mui/material/Button';

// const Education = ({educationDetail,updateEducationDetail})=>{
//     const [educationEditable, setEducationEditable] = useState(false);
//    const [currentData,setCurrentData]= useState(educationDetail);
   
      
//   const handleEducation = () => {
//     setEducationEditable(false);
//     updateEducationDetail(currentData);
//     console.log("currenEducationData",currentData);
//   };
      
//     return (
// <>
//         {!educationEditable ? (
//                 <Box  sx={{ marginBottom: '20px' }}>
//                   <Typography variant="subtitle1">{currentData.degree}
//                    <IconButton
//                 onClick={() => setEducationEditable(true)}
//                 size="small"
//                 aria-label="edit"
//               >
//                 <EditIcon />
//               </IconButton>
//             </Typography>
//                   <Typography variant="subtitle2">{currentData.institution}</Typography>
//                   <Typography variant="body2" sx={{ marginBottom: '10px' }}>
//                     {currentData.location} • {currentData.graduationYear} • GPA: {currentData.gpa}
//                   </Typography>
//                 </Box>
//           ) : (
//             <div>
              
//                 <Box  sx={{ marginBottom: '20px' }}>
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     label="currentData.degree"
//                     value={currentData.degree}
//                     onChange={(e)=>setCurrentData({...currentData,degree:e.target.value})}
//                     margin="normal"
//                   />
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     label="Institution"
//                     value={currentData.institution}
//                     onChange={(e)=>setCurrentData({...currentData,institution:e.target.value})}
//                     margin="normal"
//                   />
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     label="Location"
//                     value={currentData.location}
//                     onChange={(e)=>setCurrentData({...currentData,location:e.target.value})}
//                     margin="normal"
//                   />
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <TextField
//                       variant="outlined"
//                       fullWidth
//                       label="Graduation Year"
//                       value={currentData.graduationYear}
//                       onChange={(e)=>setCurrentData({...currentData,graduationYear:e.target.value})}
//                       margin="normal"
//                     />
//                     <TextField
//                       variant="outlined"
//                       fullWidth
//                       label="GPA"
//                       value={currentData.gpa}
//                       onChange={(e)=>setCurrentData({...currentData,gpa:e.target.value})}
//                       margin="normal"
//                     />
//                   </Box>
//                 </Box>
              
//             </div>
//           )}
//           {educationEditable && (
//             <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
//               <Button variant="contained" color="success" onClick={handleEducation}>Close Changes</Button>

//             </Box>
//           )}

//           </>
//     )
// }

// export default Education;

import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Card,CardContent } from '@mui/material';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const Education = ({ educationDetail, updateEducationDetail }) => {
  const [educationEditable, setEducationEditable] = useState(false);
  const [currentData, setCurrentData] = useState(educationDetail);

  const handleEducation = () => {
    setEducationEditable(false);
    updateEducationDetail(currentData);
    console.log("currentEducationData", currentData);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: '40px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
      {!educationEditable ? (
        <Box sx={{ marginBottom: '20px', padding: '10px' }}>
          <Typography variant="subtitle1">{currentData.degree}
            <IconButton
              onClick={() => setEducationEditable(true)}
              size="small"
              aria-label="edit"
              sx={{ marginLeft: '10px' }}
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
        <Box sx={{ marginBottom: '20px', padding: '10px' }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Degree"
            value={currentData.degree}
            onChange={(e) => setCurrentData({ ...currentData, degree: e.target.value })}
            margin="normal"
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Institution"
            value={currentData.institution}
            onChange={(e) => setCurrentData({ ...currentData, institution: e.target.value })}
            margin="normal"
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Location"
            value={currentData.location}
            onChange={(e) => setCurrentData({ ...currentData, location: e.target.value })}
            margin="normal"
            sx={{ marginBottom: '10px' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Graduation Year"
              value={currentData.graduationYear}
              onChange={(e) => setCurrentData({ ...currentData, graduationYear: e.target.value })}
              margin="normal"
              sx={{ marginRight: '10px' }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="GPA"
              value={currentData.gpa}
              onChange={(e) => setCurrentData({ ...currentData, gpa: e.target.value })}
              margin="normal"
            />
          </Box>
        </Box>
      )}
      {educationEditable && (
        <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
          <Button variant="contained" color="success" onClick={handleEducation}>Save Changes</Button>
          <Button variant="contained" color="error" onClick={() => setEducationEditable(false)} sx={{ marginLeft: '10px' }}>Cancel</Button>
        </Box>
      )}
      </CardContent>
        </Card>
  
  )
}

export default Education;
