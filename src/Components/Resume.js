import React, {useRef,useEffect,useState} from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Skill from './Skills';
import About from './About';
import ProjectList from './ProjectsList';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Achievements from './Achievements';
import CourseWork from './CourseWork';
import Contact from './Contact';
import axios from 'axios';
import API_URL from './constant';
import TwitterUploader from './Twitter';
// import TwitterPost from './PostFavPic';
// import TweetButton from './Twitter';


const Resume = ({username}) => {

  const [aboutMeData, setAboutMeData] = useState('');
  const [skillsData, setSkillsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [courseWorkData,setCourseWorkData] = useState([]);
  const [achievementData,setAchievementData]  = useState([]);
  // const [usr,setUsr] = useState('');
  // const[userData,setUserData] = useState({});

  useEffect(() => {
    fetchData(); 
  },[]);

  const fetchData = async () => {
    try {
      // Fetch user data based on the email ID from the Express server
      // console.log(userEmail);
      const response = await axios.get(`${API_URL}/users/${username}`);

        // console.log(response.data);
        // setUserData(response.data);
      // Update the state with the received data for different sections
      setAboutMeData(response.data.aboutMe);
      setSkillsData(response.data.skillsData);
      console.log("Fetched skills",skillsData);
      setProjectData(response.data.projects);
      setExperienceData(response.data.experience);
      setEducationData(response.data.education);
      setAchievementData(response.data.achievements);
      // console.log(achievementData)
      setCourseWorkData(response.data.coursework);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // You can handle the error state here if needed
    }
  };

  const saveEntireChanges = async()=>{
    try {
      // console.log("in entire change",skillsData);
      const userDataToUpdate = {
        username:username,
        email : username,
        aboutMe: aboutMeData,
        skillsData: skillsData,
        projects: projectData,
        experience: experienceData,
        education: educationData,
        coursework: courseWorkData,
        achievements: achievementData,
        // Add other properties as needed
      };
      const response = await axios.post(`${API_URL}/users/${username}`, userDataToUpdate);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle error here (e.g., show an error message)
      console.error('Error:', error);
      throw error;
    }
  }

    // const socialConnectData = {
    //     linkedin: 'https://www.linkedin.com/in/rohit-nagar-8649aa1a2/',
    //     github: 'https://github.com/nagar2817',
    //     portfolio: 'https://rohitportfolio.gatsbyjs.io/',
    //     email: 'nagar.2@iitj.ac.in',
    //     phone: '+91 9694381084',
    //     address: 'Bundi , Rajasthan ( india )',
    //   };

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const courseRef = useRef(null);
    const achievementRef   = useRef(null);
    const contactRef   = useRef(null);


    const scrollToSection = (sectionRef) => {
      // console.log(sectionRef)
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

    
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Grid container spacing={2} sx={{ width: '80%' }}>
      <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', marginBottom: '20px', paddingTop:'2em'}}>
            <Typography variant="h4">Welcome to Awesome Cv Page</Typography>
          </Box>
        </Grid>

        {/* Left sidebar */}
        <Grid item xs={2}>
          <Box sx={{ position: 'sticky', top: '5em', alignSelf: 'flex-start' }}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Resume Sections
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => scrollToSection(aboutRef)}
             >
              About Me
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(skillsRef)}
            >
              Skills
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(experienceRef)}
            >
              Experience
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(educationRef)}
            >
              Education
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(achievementRef)}
            >
              Achievements
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(courseRef)}
            >
              CourseWork
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => scrollToSection(contactRef)}
           >
              Contact
            </Typography>
           
          </Box>
        </Grid>
        {/* Right content */}
        <Grid item xs={10}>
          <Paper sx={{ padding: '20px' }}>
            {/* <TwitterPost /> */}
            {/* <TweetButton /> */}
                 {/* <TwitterUploader image={user.picture} /> */}

        <Contact ref={contactRef}  username={username}  />
            <About ref={aboutRef} AboutData={aboutMeData} setAboutMeData={setAboutMeData}/>

        <Skill ref={skillsRef} skillsData={skillsData} setSkillsData={setSkillsData}/>
        <ProjectList ref={projectsRef}  projectData={projectData} setProjectData={setProjectData} userEmail={username} />
        <ExperienceList  ref={experienceRef}  experienceData={experienceData} setExperienceData={setExperienceData} />
        <EducationList ref={educationRef} educationData={educationData} setEducationData={setEducationData} />
        <Achievements ref={achievementRef}   achievementData={achievementData} setAchievementData={setAchievementData} />
        <CourseWork  ref={courseRef}  courseWork={courseWorkData} setCourseWorkData={setCourseWorkData} />
        <Button variant='contained' color="success" onClick={saveEntireChanges}>  Save Changes</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
