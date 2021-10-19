import Tooltip from 'react-tooltip';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineLink, AiOutlineMail} from "react-icons/ai";
import './LinksBar.css'
import {darkMode,lightMode} from '../../DarkMode/DarkMode'

const LinksBar = (props) => {
    let size='30px', isDarkMode=false;

    if('size' in props){
        size = props.size;
    }
    if('isDarkMode' in props){
        isDarkMode = props.isDarkMode;
    }

    return (
        <>
             <div className='Row' >
               <div data-tip data-for='cv' className='Column' ><a  target='_blank' rel="noreferrer" href="assets/CV - Shai Idan.pdf"><AiOutlineLink color={isDarkMode ? darkMode['link']:lightMode['link']} size={size} /></a></div>
               <div data-tip data-for='mail' className='Column'><a target="_blank" rel="noreferrer" href="mailto:shaiidan@hotmail.com"><AiOutlineMail color={isDarkMode ? darkMode['link']:lightMode['link']} size={size} /></a></div>
               <div data-tip data-for='linkdin' className='Column'><a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/shai-idan-9089b6209"><AiOutlineLinkedin color={isDarkMode ? darkMode['link']:lightMode['link']} size={size} /></a></div>
               <div data-tip data-for='github' className='Column'><a target="_blank" rel="noreferrer"  href="https://github.com/shaiidan/"><AiFillGithub color={isDarkMode ? darkMode['link']:lightMode['link']} size={size} /></a></div>
                <Tooltip textColor={isDarkMode ? darkMode['body']:lightMode['body']} backgroundColor={isDarkMode ? darkMode['link']:lightMode['link']} id='cv' place='top' effect='solid'>See my CV</Tooltip>
                <Tooltip textColor={isDarkMode ? darkMode['body']:lightMode['body']} backgroundColor={isDarkMode ? darkMode['link']:lightMode['link']} id='github' place='top' effect='solid'>See my Github</Tooltip>
                <Tooltip textColor={isDarkMode ? darkMode['body']:lightMode['body']} backgroundColor={isDarkMode ? darkMode['link']:lightMode['link']} id='linkdin' place='top' effect='solid'>See my Linkdin</Tooltip>
                <Tooltip textColor={isDarkMode ? darkMode['body']:lightMode['body']} backgroundColor={isDarkMode ? darkMode['link']:lightMode['link']} id='mail' place='top' effect='solid'>Send me an email</Tooltip>
            </div>
        </>
    );
}

export default LinksBar;