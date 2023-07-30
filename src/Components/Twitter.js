import React, { useState } from 'react';
import axios from 'axios';
import API_URL from './constant';
import { Box } from '@mui/material';
// import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';



const TwitterUploader = ({image}) => {
  // const presetKey = 'ResumeProfile'
  // const cloud_name = 'dcp34rync';
  // const [liveImage , setLiveImage]= useState("");
  const [status, setStatus] = useState('');
  const [url ,setUrl] = useState('');
  const [file , setFile]= useState('');
  const handleUpload = async (e) => {
    if(!file){
      setStatus('Please select an image to upload and tweet.');
      alert('select file');
      return;
  } 
    const data = new FormData()
    data.append('file',file);
    data.append("upload_preset","ResumeProfile")
    data.append('cloud_name',"dcp34rync") 
    console.log('fecting...');
fetch("https://api.cloudinary.com/v1_1/dcp34rync/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data =>setUrl(data.url))
.catch(err => console.log(err))

try {
  // Send the file to the server
  console.log('tweet function calling...')
  const result = await axios.post(`${API_URL}/api/uploadToTwitter`, {url});
  // console.log("result",result.data)
  if(result.status===200){
    // alert('Tweet Done')
    toast.success('🦄 Tweet Posted!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }else{
    alert('please try again');
  }
  
  // // Show success message to the user
  // setStatus('Image uploaded and tweet posted successfully!');
  // console.log("posted...");
  e.target.value  = '';
 
} catch (error) {
  // Show error message to the user
  setStatus('Failed to upload image and post tweet.');
}
// alert('image uploaded');
  };

  return (
      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
        {/* <input type="file"  name="image" onChange={handleUpload} /> */}
        <label >
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    // name="upload-photo"
    type="file"
    // value={file} 
    onChange={(e)=>{
      setFile(e.target.files[0])
      e.target.value = ''
    }}  
  />
  <Fab color="primary" size="small" component="span" aria-label="add">
    <AddIcon />
  </Fab>
</label>
        {/* <input type="file" onChange={(e)=> setFile(e.target.files[0])} ></input> */}
        {/* <Button onClick={handleUpload}> Uplaod image </Button> */}
        <Fab variant="extended" onClick={handleUpload}>
        <NavigationIcon sx={{ mr: 1 }} />
        Tweet
    </Fab>
        {/* <Button variant="contained" color="warning" onClick={handleTweet}>
          Tweet My Fav Pic
         </Button> */}
      <ToastContainer /> 
        
      </Box>
  );
};

export default TwitterUploader;
