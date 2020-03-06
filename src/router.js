import React from 'react';
import { Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

const Routes = () => (
        <switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
        </switch>
);

export default Routes;
