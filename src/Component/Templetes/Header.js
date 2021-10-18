import {Navbar, Nav, Container} from 'react-bootstrap';
import './Header_Footer.css';
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from 'react-redux';
import {selectIsDarkMode,changeMode} from '../../Store/darkModeSlice'

const Header = () => {
  
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(changeMode())  
  };


  return (
        <>
            <Navbar sticky='top' className='Header-navbar' variant='dark'  data-theme={isDarkMode ? "dark" : "light"}>
             <Container >
                <Nav  activeKey={window.location.pathname} >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Projects">Projects</Nav.Link>
                  <Nav.Link 
                    active={window.location.href.toLowerCase().toString().includes('/Home#about'.toLowerCase())} 
                    href="/Home#About">About</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                <Nav.Item style={{floaRright:'auto'}}>
                    <DarkModeToggle  onChange={toggleDarkMode} checked={isDarkMode} size={50} />
                </Nav.Item>
                </Nav>
             </Container>
            </Navbar>
        </>
    );
} 
export default Header;

