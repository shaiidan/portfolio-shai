import { useSelector } from 'react-redux'; 
import Header from '../Header';
import Footer from '../Footer';
import { selectIsDarkMode } from '../../Store/darkModeSlice';
import './About.css'


const About = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return(
    <>
      <Header />
      <div className='About' data-theme={isDarkMode ? "dark" : "light"}>
        <div className='About-body'>
          <p>About</p>
        </div>
        
      </div>
        
      <Footer />
    </>
  );
}
        

export default About;
  