import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Transition from './components/body/experiences/transition';
import Poesia from './components/body/experiences/page/poesia';

const Routes = () => {
    return <Router>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/project/poesia" component={Poesia}/>
            <Route path="/redirect/:item" component={Transition}/>
        </Switch>    
    </Router>
};

export default Routes;
