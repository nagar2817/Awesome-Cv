import React,{forwardRef, useEffect, useState} from 'react';
import { Box, Typography ,TextField,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { courseWorkData } from '../Data';

const CourseWork = forwardRef(({courseRef,courseWork,setCourseWorkData},ref)=>{
    const [courseEditable, setCourseEditable] = useState(false);
  const [courseData, setCourseData] = useState(courseWork);

  useEffect(()=>{
    setCourseData(courseWork);
  },[])
  const handleSaveChangesAchievements = () => {
    setCourseEditable(false);
    setCourseWorkData(courseWork);
    // console.log('couse',courseData);
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

    return (
<Box sx={{ marginBottom: '40px' }} ref={ref}>
          <Typography variant="h5">
            CourseWork{' '}
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
              {courseWork.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              multiline
              label="Course Work (separated by commas)"
              value={courseWork.join(',')}
              onChange={(e) => {
                setCourseWorkData(e.target.value.split(','));
              }}
              margin="normal"
            />
          )}
          {courseEditable && (
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              
              <Button variant="contained" color="success" onClick={handleSaveChangesAchievements}>Close Changes</Button>
            </Box>
          )}
          <ToastContainer />
        </Box>
    )

})

export default CourseWork;