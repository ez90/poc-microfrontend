import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';

import createStore from './redux/createStore';
import {GlobalStyle, SWrapper} from './styles';

// Lazy loaded sub-applications
const Product = React.lazy(() => import('product/App'));
const Account = React.lazy(() => import('account/App'));
const Blog = React.lazy(() => import('blog/App'));

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
                            <Route exact path="/">
                                <HomePage/>
                            </Route>
                            <Route path="/product/">
                                <Product key={count}/>
                            </Route>
                            <Route path="/account/">
                                <Account store={store} key={count}/>
                            </Route>
                            <Route path="/blog/">
                                <Blog />
                            </Route>
                        </Switch>
                    </React.Suspense>
                </SWrapper>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
