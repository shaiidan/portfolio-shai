import LinksBar from './LinksBar';
import './Header_Footer.css';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../Store/darkModeSlice';

const Footer = () => {

    const isDarkMode = useSelector(selectIsDarkMode);
    
    return (
        <>
          <div className='Footer' data-theme={isDarkMode ? "dark" : "light"}>         
                <h3 >Shai Idan</h3> 
                 <LinksBar  type={isDarkMode ? "dark" : "light"} color={'white'} />

            </div>
        </>
    );
}

export default Footer;