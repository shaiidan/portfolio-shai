import Header from '../Header';
import './Home.css';
import Footer from '../Footer';
import LinksBar from '../LinksBar';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../Store/darkModeSlice';
import About from './About';

const Home = () =>{
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <>
      <Header />
        <div className="Home" data-theme={isDarkMode ? "dark" : "light"}>
          <header className="Home-header">
            <h1>Shai Idan</h1>
            <img src="Images/shai-photo.png" className="Home-logo" alt="logo" />
            <p>Software Engineer</p>
            <div className='Home-link'>
              <LinksBar type={isDarkMode ? "dark" : "light"} color={isDarkMode ? '#61dafb':'#282c34'} size='50px' />
            </div>
          </header>
          
          <About />
        </div>
      <Footer/>
    </>
    );
  }

export default Home;
