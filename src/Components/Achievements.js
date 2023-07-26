import React,{useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { AchievementsData } from '../Data';

const Achievements = ({achieveRef})=>{
    const [achievementsEditable, setAchievementsEditable] = useState(false);
  const [achievementsData, setAchievementsData] = useState(AchievementsData);

  const handleSaveChangesAchievements = () => {
    setAchievementsEditable(false);
  };
    return (
<Box sx={{ marginBottom: '40px' }} ref={achieveRef}>
          <Typography variant="h5">
            Achievements{' '}
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
              {achievementsData.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              multiline
              label="Achievements (separated by commas)"
              value={achievementsData.join(', ')}
              onChange={(e) => {
                setAchievementsData(e.target.value.split(', '));
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