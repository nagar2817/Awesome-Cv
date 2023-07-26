import React, {useRef} from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Skill from './Skills';
import About from './About';
import ProjectList from './ProjectsList';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Achievements from './Achievements';
import CourseWork from './CourseWork';

const Resume = () => {

    const socialConnectData = {
        linkedin: 'https://www.linkedin.com/in/rohit-nagar-8649aa1a2/',
        github: 'https://github.com/nagar2817',
        portfolio: 'https://rohitportfolio.gatsbyjs.io/',
        email: 'nagar.2@iitj.ac.in',
        phone: '+91 9694381084',
        address: 'Bundi , Rajasthan ( india )',
      };

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const courseRef = useRef(null);
    const achievementRef   = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Grid container spacing={2} sx={{ width: '80%' }}>
      <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="h5">Rohit Nagar</Typography>
            <Box sx={{ marginTop: '10px' }}>
              <a href={socialConnectData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{' '}
              |{' '}
              <a href={socialConnectData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              |{' '}
              <a href={socialConnectData.portfolio} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              |{' '}
              <a href={socialConnectData.email} target="_blank" rel="noopener noreferrer">
                {socialConnectData.email}
              </a>
              <Typography variant="body1">
                <strong>Phone:</strong> {socialConnectData.phone}
              </Typography>
              <Typography variant="body1">
                <strong>Address:</strong> {socialConnectData.address}
              </Typography>
              {/* Add more social links or details as needed */}
            </Box>
          </Box>
        </Grid>

        {/* Left sidebar */}
        <Grid item xs={2}>
          <Box sx={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Resume Sections
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
             onClick={()=>scrollToSection(aboutRef)}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(skillsRef)} >
              Skills
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(projectsRef)}>
              Projects
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(experienceRef)}>
              Experience
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(educationRef)}>
              Education
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(achievementRef)}>
              Achievements
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px', cursor: 'pointer' }}
            onClick={()=>scrollToSection(courseRef)}>
              CourseWork
            </Typography>
           
          </Box>
        </Grid>
        {/* Right content */}
        <Grid item xs={10}>
          <Paper sx={{ padding: '20px' }}>

            <About aboutRef={aboutRef}/>

        <Skill skillsRef={skillsRef} />
        <ProjectList ref={projectsRef} />
        <ExperienceList ref={experienceRef} />
        <EducationList ref={educationRef} />
        <Achievements ref={achievementRef}/>
        <CourseWork ref={courseRef}/>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
