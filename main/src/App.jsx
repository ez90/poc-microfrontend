import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {Provider } from 'react-redux';

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import createStore from './redux/createStore';
import {GlobalStyle, SWrapper} from './styles';
import Routes from './routes';

const store = createStore({});

const App = () => {
    const [count, setCount] = React.useState(0);

    // @TODO: Find a better solution
    // This is weird but as we need to have independent router in apps,
    // some route path may be the same (eg: children app default page)
    // This function will update a predictable value we can use as key in exposed app components to force
    // the router to do the matching routes process for links in the main menu.
    const increaseCount = () => setCount(count + 1);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <BrowserRouter>
                <Header sitename="POC Micro-frontend"/>
                <Navbar increaseCount={increaseCount}/>
                <SWrapper>
                    <React.Suspense fallback={"Loading"}>
                        <Switch>
                            <Routes store={store} count={count} />
                        </Switch>
                    </React.Suspense>
                </SWrapper>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
