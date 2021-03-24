import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {SLink} from './styles';
import Blog from './components/Blog'
import Post from './components/Post'

const App = () => (
    <>
        <h1>Usage of typescript</h1>
        <Blog/>
    </>
);

export default App;