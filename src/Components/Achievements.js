import React,{useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import { AchievementsData } from '../Data';

const Achievements = ({achieveRef,achievementData,setAchievementData})=>{
    const [achievementsEditable, setAchievementsEditable] = useState(false);
  const [currentData, setCurrentData] = useState(achievementData);
  const handleSaveChangesAchievements = () => {
    setAchievementsEditable(false);
    setAchievementData(currentData);
    
    console.log("achiementData",currentData);
  };

  // const Arraymap = currentData.split(',');
    return (
<Box sx={{ marginBottom: '40px' }} ref={achieveRef}>
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
              {currentData.map((achievement, index) => (
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
              value={currentData.join(',')}  
              onChange={(e) => {
                setCurrentData(e.target.value.split(','))  
              }}
              margin="normal"
            />
          )}
          {achievementsEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesAchievements}>Save Changes</button>
            </Box>
          )}
        </Box>
    )

}

export default Achievements;