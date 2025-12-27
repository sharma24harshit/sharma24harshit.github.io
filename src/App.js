import { useRef } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Calender from './Components/Calender/Calender';
import Contact from './Components/Contact/Contact';
import GitStats from './Components/GitStats/GitStats';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Tools from './Components/Tools/Tools';
import Experience from './Components/Experience/Experience';

function App() {
  const AboutRef = useRef(null);
  const skillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToAboutMe = () => {
    AboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    ContactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div >
       <Navbar 
       skillsCLick={scrollToSkills} 
       scrollToAboutMe={scrollToAboutMe}
       scrollToProjects={scrollToProjects}
       scrollToContact={scrollToContact}
       />
       <AboutMe AboutRef={AboutRef} />
       <Skills skillsRef={skillsRef}/>
       <Tools/>
       <Projects  ProjectsRef={ProjectsRef}/>
       <Experience />
       <Calender/>
       {/* <GitStats/> */}
       <Contact ContactRef={ContactRef}  />
    </div>
  );
}

export default App;
