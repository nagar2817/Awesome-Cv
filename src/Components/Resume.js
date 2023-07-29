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

const Resume = ({username}) => {

  const [aboutMeData, setAboutMeData] = useState('');
  const [skillsData, setSkillsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [courseWorkData,setCourseWorkData] = useState([]);
  const [achievementData,setAchievementData]  = useState([]);

  useEffect(() => {
    fetchData(); 
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${username}`);
      setAboutMeData(response.data.aboutMe);
      setSkillsData(response.data.skillsData);
      setProjectData(response.data.projects);
      setExperienceData(response.data.experience);
      setEducationData(response.data.education);
      setAchievementData(response.data.achievements);
      setCourseWorkData(response.data.coursework);

      console.log("fetch User details",response.data);
    } catch (error) {
      console.error('Error fetching user details in Resume Component:', error);
    }
  };

  const saveEntireChanges = async()=>{
    try {
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
      };
      const response = await axios.post(`${API_URL}/users/${username}`, userDataToUpdate);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


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
          <Box sx={{ position: 'sticky', top: '4em', alignSelf: 'flex-start' }}>
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
