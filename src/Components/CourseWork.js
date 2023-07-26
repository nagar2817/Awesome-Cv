import React,{useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { courseWorkData } from '../Data';

const CourseWork = ({courseRef})=>{
    const [courseEditable, setCourseEditable] = useState(false);
  const [courseData, setCourseData] = useState(courseWorkData);

  const handleSaveChangesAchievements = () => {
    setCourseEditable(false);
  };
    return (
<Box sx={{ marginBottom: '40px' }} ref={courseRef}>
          <Typography variant="h5">
            Achievements{' '}
            {!courseEditable && (
              <IconButton
                onClick={() => setCourseEditable(true)}
                size="small"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            )}
          </Typography>
          {!courseEditable ? (
            <ul>
              {courseData.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              multiline
              label="Achievements (separated by commas)"
              value={courseData.join(', ')}
              onChange={(e) => {
                setCourseData(e.target.value.split(', '));
              }}
              margin="normal"
            />
          )}
          {courseEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <button onClick={handleSaveChangesAchievements}>Save Changes</button>
            </Box>
          )}
        </Box>
    )

}

export default CourseWork;