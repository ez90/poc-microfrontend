import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {SLink} from './styles';

export default () => (
    <Router>
        <SLink to='/product/'>Default display</SLink>
        <SLink to='/product/cats'>Cats</SLink>
        <SLink to='/product/dogs'>Dogs</SLink>
        <Switch>
            <Route exact path='/product/'>
                <div>Sub Application default route !</div>
            </Route>
            <Route exact path='/product/cats'>
                <div>Sub Application cats route !</div>
            </Route>
            <Route exact path='/product/dogs'>
                <div>Sub Application dogs route !</div>
            </Route>
            {/* This route is used if app is started without main app*/}
            <Route exact path='/'>
                <Redirect to="/product/"/>
            </Route>
        </Switch>
    </Router>
);

