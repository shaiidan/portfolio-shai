import LinksBar from './LinksBar';
import './Header_Footer.css';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../Store/darkModeSlice';

const Footer = () => {

    const isDarkMode = useSelector(selectIsDarkMode);
    
    return (
        <>
          <div className='Footer' data-theme={isDarkMode ? "dark" : "light"}>
                <br/>
                <h3 >Shai Idan</h3> 
                <div className='Footer-link' >
                    <LinksBar color='white' />
                </div>
                <br/>
            </div>
        </>
    );
}

export default Footer;