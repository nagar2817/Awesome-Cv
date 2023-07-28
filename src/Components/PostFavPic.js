import React, { useState } from 'react';
import axios from "axios";

const TwitterPost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text,setText] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePostToFavPic = () => {

    const formData = new FormData();
  formData.append('file', selectedFile);

  fetch('http://localhost:5000/twitter/api/twitter/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error posting tweet:', error);
    });

      axios.get("http://localhost:5000/this",  { crossdomain: true }).then(response => {
        setText(response.data);
      });
    
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>{ text} </p>
      <button onClick={handlePostToFavPic}> Post Fav Pic</button>
    </div>
  );
};

export default TwitterPost;
