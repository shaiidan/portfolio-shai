import React from 'react';
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/About' component={About}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/" component={()=> {
                  return(
                    <>
                     <div className='route-not-found'>
                      <h1>Not Fount !!</h1> <br/>
                      <Link to="/">Go to Home</Link>
                     </div>
                    </>
                   ); 
            }}/>
        </Switch>
    </Router>
);