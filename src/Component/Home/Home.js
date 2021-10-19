import Header from '../Templetes/Header';
import Footer from '../Templetes/Footer';
import LinksBar from '../Templetes/LinksBar';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../Store/darkModeSlice';
import About from './About';
import './Home.css';

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
          </header>
          <div className='Home-link'>
              <LinksBar isDarkMode={isDarkMode}  size='50px' />
          </div>
        </div>
        <About />
      <Footer/>
    </>
    );
  }

export default Home;
