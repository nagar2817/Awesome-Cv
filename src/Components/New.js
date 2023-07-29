import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center', marginTop: '5em' }}>

      <label htmlFor="upload-photo">
        <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
        />
    <Fab color="primary" component="span" aria-label="add">
        <AddIcon />
    </Fab>
    </label>;
    <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Tweet
    </Fab>
    </Box>
  );
}


