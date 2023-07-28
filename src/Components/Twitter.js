import React, { useState } from 'react';
import axios from 'axios';
import API_URL from './constant';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TwitterUploader = ({image}) => {
//   const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

  const handleUpload = async () => {
    // const data = new FormData();
    // data.append("file",file);
    // data.append("upload_preset","ml_default");
    // data.append("cloud_name","dst6tex9n");
    // fetch("https://api.cloudinary.com/_v1_1/dst6tex9n/image/upload",{
    //     method:"post",
    //     body:data
    // }).then((res=>res.json()))
    // .then((data)=>{
    //     console.log(data);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // if(!file){
    //     setStatus('Please select an image to upload and tweet.');
    //     return;
    // } 
    // console.log(file)
    // const formData = new FormData();
    // await formData.append('image', file);
    // console.log("formdata",formData);
    // if(!image){
    //     setStatus('select file')
    //     return;
    // }
    try {
      // Send the file to the server
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
      await axios.post('http://localhost:5000/api/uploadToTwitter', {image});
      console.log(1);

      // Show success message to the user
      setStatus('Image uploaded and tweet posted successfully!');
     
    } catch (error) {
      // Show error message to the user
      setStatus('Failed to upload image and post tweet.');
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
        <Button variant="contained" color="warning" onClick={handleUpload}>
          Tweet My Profile Picture
        </Button>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default TwitterUploader;
