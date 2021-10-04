import React from 'react';
import Logo from '../../Images/logo.svg';
import './Home.css';

class Home extends React.Component{

  // show 
  render() {
    return (
      <>
          <div className="App">
            <header className="App-header">
            <img src={Logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
            </header>
          </div>
      </>
    );
  }
}

export default Home;
