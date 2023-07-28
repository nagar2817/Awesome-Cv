// import React, { useState } from 'react';
// import axios from 'axios';

// const TweetButton = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     // We'll use only the first selected file for this example
//     setSelectedFile(acceptedFiles[0]);
//   };

//   const handleLogin = () => {
//     // Redirect the user to the server endpoint for Twitter login
//     window.location.href = 'http://localhost:5000/api/twitter/login';
//   };

//   const handleTweet = async () => {
//     if (!selectedFile) {
//       console.error('Please select an image to tweet.');
//       return;
//     }

//     // Read the selected file as a base64 string
//     const reader = new FileReader();
//     reader.readAsDataURL(selectedFile);
//     reader.onload = async () => {
//       const base64Data = reader.result.split(',')[1];

//       try {
//         // Post the tweet with the image on behalf of the user
//         const response = await axios.post('http://localhost:5000/api/twitter/tweet', {
//           base64Data,
//           status: 'Check out my favorite pic!', // Replace with your desired tweet text
//         });

//         console.log('Tweet posted successfully!', response.data.tweet);
//       } catch (error) {
//         console.error('Error posting tweet:', error);
//       }
//     };
//   };

//   return (
//     <div>
//       <input type="file" onChange={(event) => onDrop(event.target.files)} />
//       <button onClick={handleLogin}>Login with Twitter</button>
//       <button onClick={handleTweet} disabled={!selectedFile}>
//         Tweet Image
//       </button>
//     </div>
//   );
// };

// export default TweetButton;
