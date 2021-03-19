import React from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import {SLink} from './styles';

export default () => {
    return (
        <Router>
            <SLink to='/product'>SubHome</SLink>
            <SLink to='/product/cats'>Cats</SLink>
            <SLink to='/product/dogs'>Dogs</SLink>
            <Switch>
                <Route exact path='/product'>
                    <div>Sub Application default route !</div>
                </Route>
                <Route exact path='/product/cats'>
                    <div>Sub Application cats route !</div>
                </Route>
                <Route exact path='/product/dogs'>
                    <div>Sub Application dogs route !</div>
                </Route>
            </Switch>
        </Router>
    );
};
