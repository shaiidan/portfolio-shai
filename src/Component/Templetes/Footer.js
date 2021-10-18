import LinksBar from '../Templetes/LinksBar';
import './Header_Footer.css';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../Store/darkModeSlice';


const Footer = () => {

    const isDarkMode = useSelector(selectIsDarkMode);
    
    return (
        <>
          <div className='Footer' data-theme={isDarkMode ? "dark" : "light"}>         
                <h3 >Shai Idan</h3> 
                 <LinksBar  isDarkMode={isDarkMode}  />

            </div>
        </>
    );
}

export default Footer;