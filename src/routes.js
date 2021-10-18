import React, { StrictMode } from 'react';
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import { Provider } from 'react-redux';
import store from './Store/store';
import About from './Component/Home/About';

export default (
    <StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/Home' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path="/Projects" component={Projects}/>
                    <Route path="/" component={()=> {
                        return(
                            <>
                                <div className='route-not-found'>
                                   <h1>Not Fount 404 !!</h1> <br/>
                                   <Link to="/">Go to Home</Link>
                                </div>
                            </>
                        ); 
                    }}/>
                </Switch>
           </Router>
        </Provider>
    </StrictMode>
);