import Tooltip from 'react-tooltip';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineLink, AiOutlineMail} from "react-icons/ai";
import './LinksBar.css'


const LinksBar = (props) => {
    let color = 'black', size='30px', type='light';
    if('color' in props){
        color = props.color;
    }
    if('size' in props){
        size = props.size;
    }
    if('type' in props){
        if(props.type === 'light' || props.type === 'dark'){
            type = props.type;
        }
    }

    return (
        <>
             <div className='Row' >
               <div data-tip data-for='cv' className='Column' ><a  href="assets/CV - Shai Idan.pdf"><AiOutlineLink color={color} size={size} /></a></div>
               <div data-tip data-for='mail' className='Column'><a  href="mailto:shaiidan@hotmail.com"><AiOutlineMail color={color} size={size} /></a></div>
               <div data-tip data-for='linkdin' className='Column'><a  href="https://www.linkedin.com/in/shai-idan-9089b6209"><AiOutlineLinkedin color={color} size={size} /></a></div>
               <div data-tip data-for='github' className='Column'><a  href="https://github.com/shaiidan/"><AiFillGithub color={color} size={size} /></a></div>
                <Tooltip  type={type} id='cv' place='top' effect='solid'>See my CV</Tooltip>
                <Tooltip type={type} id='github' place='top' effect='solid'>See my Github</Tooltip>
                <Tooltip type={type} id='linkdin' place='top' effect='solid'>See my Linkdin</Tooltip>
                <Tooltip type={type} id='mail' place='top' effect='solid'>Send me an email</Tooltip>
            </div>
        </>
    );
}

export default LinksBar;