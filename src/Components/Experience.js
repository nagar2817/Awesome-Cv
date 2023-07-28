// import React, { useState } from 'react';
// import { Box, Typography, TextField, IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import Button from '@mui/material/Button';
// // import { experienceData } from '../Data';

// const Experience = ({experienceDetail,updateExperienceData})=>{
//     const [experienceEditable, setExperienceEditable] = useState(false);
//   const [currentData,setCurrentData] = useState(experienceDetail);
  
//   const handleSaveChangesExperience = () => {
//     setExperienceEditable(false);
//     // Save changes for the Experience section here
//     updateExperienceData(currentData);
//     console.log("currenExperienceData",currentData);
//   };
//     return (
//         <>
//         { !experienceEditable ?
//             <Box sx={{ marginBottom: '40px' }}>
//             <Typography variant="subtitle1">
//               {currentData.position} at {currentData.companyName} {!experienceEditable && (
//               <IconButton
//                 onClick={() => setExperienceEditable(true)}
//                 size="small"
//                 aria-label="edit"
//               >
//                 <EditIcon />
//               </IconButton>
//             )}
//             </Typography>
//             <Typography variant="body2" sx={{ marginBottom: '10px' }}>
//               {currentData.startDate} - {currentData.endDate} | {currentData.location}
//             </Typography>
//             <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
//               {currentData.domain.map(item=><span>{item}</span>)}
//             </Typography>
//             <ul>
//               {currentData.bullets.map((bullet, bulletIndex) => (
//                 <li key={bulletIndex}>{bullet}</li>
//               ))}
//               {console.log(typeof currentData.bullets)}
//             </ul>
//           </Box>     :
//           <Box sx={{ marginBottom: '40px' }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             label="Company Name"
//             value={currentData.companyName}
//             onChange={(e)=>setCurrentData({...currentData, companyName:e.target.value})}
//             margin="normal"
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             label="Position"
//             value={currentData.position}
//             onChange={(e)=>setCurrentData({...currentData, position:e.target.value})}
//             margin="normal"
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="Start Date"
//               value={currentData.startDate}
//               onChange={(e)=>setCurrentData({...currentData, startDate:e.target.value})}
//               margin="normal"
//             />
//             <Typography
//               variant="body2"
//               sx={{ marginLeft: '5px', marginRight: '5px', textAlign: 'center' }}
//             >
//               -
//             </Typography>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="End Date"
//               value={currentData.endDate}
//               onChange={(e)=>setCurrentData({...currentData, endDate:e.target.value})}
//               margin="normal"
//             />
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="Location"
//               value={currentData.location}
//               onChange={(e)=>setCurrentData({...currentData, location:e.target.value})}
//               margin="normal"
//             />
//           </Box>
//           <TextField
//             variant="outlined"
//             fullWidth
//             label="Domain"
//             value={currentData.domain.join(',')}
//             onChange={(e)=>setCurrentData({...currentData, domain:e.target.value.split(',')})}
//             margin="normal"
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             label="Bullets (separated by commas)"
//             value={currentData.bullets.join(',')}
//             onChange={(e)=>setCurrentData({...currentData, bullets:e.target.value.split(',')})}
//             margin="normal"
//           />
//         </Box>
//         }
// {experienceEditable && (
//             <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
//               <Button variant="contained" color="success" onClick={handleSaveChangesExperience}>Close Changes</Button>

//             </Box>
//           )}

//         </>

//     )
// }

// export default Experience;


import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton,Card,CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const Experience = ({ experienceDetail, updateExperienceData }) => {
  const [experienceEditable, setExperienceEditable] = useState(false);
  const [currentData, setCurrentData] = useState(experienceDetail);

  const handleSaveChangesExperience = () => {
    setExperienceEditable(false);
    updateExperienceData(currentData);
    console.log("currentExperienceData", currentData);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: '40px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
    {/* <Box sx={{ marginBottom: '40px', border: '1px solid #ccc', borderRadius: '5px', padding: '15px' }}> */}
      {!experienceEditable ? (
        <>
          <Typography variant="subtitle1">
            {currentData.position} at {currentData.companyName}
            {!experienceEditable && (
              <IconButton
                onClick={() => setExperienceEditable(true)}
                size="small"
                aria-label="edit"
                sx={{ marginLeft: '10px' }}
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            {currentData.startDate} - {currentData.endDate} | {currentData.location}
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
            {currentData.domain.map(item => (
              <span key={item}>{item}</span>
            ))}
          </Typography>
          <ul>
            {currentData.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <TextField
            variant="outlined"
            fullWidth
            label="Company Name"
            value={currentData.companyName}
            onChange={(e) => setCurrentData({ ...currentData, companyName: e.target.value })}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Position"
            value={currentData.position}
            onChange={(e) => setCurrentData({ ...currentData, position: e.target.value })}
            margin="normal"
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Start Date"
              value={currentData.startDate}
              onChange={(e) => setCurrentData({ ...currentData, startDate: e.target.value })}
              margin="normal"
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: '5px', marginRight: '5px', textAlign: 'center' }}
            >
              -
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              label="End Date"
              value={currentData.endDate}
              onChange={(e) => setCurrentData({ ...currentData, endDate: e.target.value })}
              margin="normal"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Location"
              value={currentData.location}
              onChange={(e) => setCurrentData({ ...currentData, location: e.target.value })}
              margin="normal"
            />
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            label="Domain (separated by commas)"
            value={currentData.domain.join(',')}
            onChange={(e) => setCurrentData({ ...currentData, domain: e.target.value.split(',') })}
            margin="normal"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Bullets (separated by commas)"
            value={currentData.bullets.join(',')}
            onChange={(e) => setCurrentData({ ...currentData, bullets: e.target.value.split(',') })}
            margin="normal"
          />
        </>
      )}
      {experienceEditable && (
        <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
          <Button variant="contained" color="success" onClick={handleSaveChangesExperience}>Save Changes</Button>
          <Button variant="contained" color="error" onClick={() => setExperienceEditable(false)} sx={{ marginLeft: '10px' }}>Cancel</Button>
        </Box>
      )}
    {/* </Box> */}
    </CardContent>
    </Card> 
  )
}

export default Experience;
