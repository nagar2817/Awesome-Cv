import React,{forwardRef, useEffect, useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { AchievementsData } from '../Data';

const Achievements = forwardRef(({achieveRef,achievementData,setAchievementData},ref)=>{
    const [achievementsEditable, setAchievementsEditable] = useState(false);
  const [currentData, setCurrentData] = useState(achievementData);
  // console.log(achievementData);

  useEffect(()=>{
    setCurrentData(achievementData);
  },[])

  // console.log("curretn",currentData);
  const handleSaveChangesAchievements = () => {
    setAchievementsEditable(false);
    setAchievementData(achievementData);
    // console.log("achiementData",currentData);
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      toast("click below to Save!!!")
  };

  // const Arraymap = currentData.split(',');
    return (
<Box sx={{ marginBottom: '40px' }} ref={ref}>
          <Typography variant="h5">
            Achievements{' '}
            {/* {console.log('newData',ArrayAchievements())} */}
            {!achievementsEditable && (
              <IconButton
                onClick={() => setAchievementsEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          {!achievementsEditable ? (
            <ul>
              {achievementData.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
              {/* {currentData}  */}
            </ul>
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              multiline
              label="Achievements (separated by commas)"
              value={achievementData.join(',')}  
              onChange={(e) => {
                setAchievementData(e.target.value.split(','))  
              }}
              margin="normal"
            />
          )}
          {achievementsEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <Button variant="contained" color="success" onClick={handleSaveChangesAchievements}>Close Changes</Button>

            </Box>
          )}
  <ToastContainer/>

        </Box>
    )

})

export default Achievements;