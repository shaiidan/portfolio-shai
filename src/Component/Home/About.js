import { useSelector } from 'react-redux'; 
import { selectIsDarkMode } from '../../Store/darkModeSlice';
import './Home.css'
import SoftwareLanguagesIcons from './SoftwareLanguagesIcons';

const About = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return(
    <>
      <div id='About' className='About' data-theme={isDarkMode ? "dark" : "light"}>
        <div className='About-header'>
          <h1>About</h1>
        </div>
        <div className='About-body'>
          <p>
          I completed my bachelor's degree in software engineering. <br/> 
          I am friendly, ambitious, and have leadership and management skills. 
          Can manage time in multiple tasks and work under pressure. <br />
          I learn quickly and can solve problems quickly. <br /> <br/>
            <u>Knowlange:</u>
          </p>
          <SoftwareLanguagesIcons isDarkMode={isDarkMode}/>
        </div>
        
      </div>
    </>
  );
}
        

export default About;
  