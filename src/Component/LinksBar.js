import { AiFillGithub, AiOutlineLinkedin, AiOutlineLink, AiOutlineMail} from "react-icons/ai";
import './LinksBar.css'


const LinksBar = (props) => {
    let color = 'black', size='30px';
    if('color' in props){
        color = props.color;
    }
    if('size' in props){
        size = props.size;
    }

    return (
        <>
             <div className='Row' >
               <div className='Column' ><a  href="assets/CV - Shai Idan.pdf"><AiOutlineLink color={color} size={size} /></a></div>
               <div className='Column'><a  href="mailto:shaiidan@hotmail.com"><AiOutlineMail color={color} size={size} /></a></div>
               <div className='Column'><a  href="https://www.linkedin.com/in/shai-idan-9089b6209"><AiOutlineLinkedin color={color} size={size} /></a></div>
               <div className='Column'><a  href="https://github.com/shaiidan/"><AiFillGithub color={color} size={size} /></a></div>
            </div>
        </>
    );
}

export default LinksBar;