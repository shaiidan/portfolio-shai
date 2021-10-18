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
          <p>I completed my bachelor's degree in software engineering. <br/>
            I have a special love for development software and coding. <br/>
            I come with a practical approach. <br/>
            I learn quickly. <br/> <br/>
            Knowlange:
          </p>
          <SoftwareLanguagesIcons isDarkMode={isDarkMode}/>
        </div>
        
      </div>
    </>
  );
}
        

export default About;
  