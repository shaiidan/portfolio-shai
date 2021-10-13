import {Navbar, Nav, Container} from 'react-bootstrap';
import './Header_Footer.css';
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from 'react-redux';
import {selectIsDarkMode,changeMode} from '../Store/darkModeSlice'


const Header = () => {
  
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(changeMode())  
  };
   

  return (
        <>
            <Navbar sticky='top' className='Header-navbar' variant='dark' data-theme={isDarkMode ? "dark" : "light"}>
             <Container >
                <Nav activeKey={window.location.pathname} className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Projects">Projects</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                <Nav.Item style={{floaRright:'auto'}}>
                    <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode} size={50} />
                  </Nav.Item>
                </Nav>
             </Container>
            </Navbar>
        </>
    );
} 

  /*
  componentWillUnmount(){
    const darkModeStorage = localStorage.getItem('isDarkMode');
    if(darkModeStorage !== null){
       this.setState({isDarkMode:darkModeStorage});
       if('setIsDarkMode' in this.props){ this.props.setIsDarkMode(darkModeStorage);} 
    }
    else{
      this.setState({isDarkMode:false});
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode = () => {
    this.setState({isDarkMode: this.state.isDarkMode ? false : true});
    if('setIsDarkMode' in this.props){ this.props.setIsDarkMode(this.state.isDarkMode ? false : true);}
    localStorage.setItem('isDarkMode',this.state.isDarkMode);
  }
  
  render(){
    return (
      <>
          <Navbar sticky='top' className='Header-navbar' variant='dark' data-theme={this.state.isDarkMode ? "dark" : "light"}>
           <Container >
              <Nav activeKey={window.location.pathname} className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Projects">Projects</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
              <Nav.Item style={{floaRright:'auto'}}>
                  <DarkModeToggle onChange={this.toggleDarkMode} checked={this.state.isDarkMode} size={50} />
                </Nav.Item>
              </Nav>
           </Container>
          </Navbar>
      </>
    );
  }
}
*/
/*

*/
export default Header;

