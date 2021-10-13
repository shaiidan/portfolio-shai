import Header from '../Header';
import './Home.css';
import Footer from '../Footer';
import LinksBar from '../LinksBar';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../Store/darkModeSlice';


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
            <LinksBar color={isDarkMode ?'#282c34' : '#61dafb'} size='50px' />
          </header>
        </div>
      <Footer/>
    </>
    );
  }

export default Home;
