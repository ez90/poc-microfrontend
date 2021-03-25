import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';

import { SWrapper, SContent } from './styles';

const App = () => (
    <Router>
        <h1>POC context: Each featured applications have their own router<br/> not conflicting with the main global router</h1>
        <p>👋 I&apos;m the product feature application and i have my own router.</p>
        <p>Look below, you can see a sub-menu which is entirely handle by the current featured applications (aka child
            SPA) router.</p>
        <p>Keep in mind navigation must be simple for a better user experience 🙂</p>
        <SWrapper>
            <Navbar/>
            <SContent>
                <Switch>
                    <Route exact path='/product/'>
                        <h2>Our Offer</h2>
                        <div>Find among our proposals what suits you and just that !</div>
                    </Route>
                    <Route exact path='/product/cloud-data-center/'>
                        <h2>Cloud DataCenter</h2>
                        <div>Everything you need to know about Cloud DataCenter.</div>
                    </Route>
                    <Route exact path='/product/cloud-server/'>
                        <h2>Cloud Server</h2>
                        <div>Everything you need to know about Cloud Server.</div>
                    </Route>
                    {/* This route is used if app is started without main app*/}
                    <Route exact path='/'>
                        <Redirect to="/product/"/>
                    </Route>
                </Switch>
            </SContent>
        </SWrapper>
    </Router>
);

export default App;
