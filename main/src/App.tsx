import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';

import createStore from './redux/createStore';
import { SWrapper } from './styles';

// Lazy loaded sub-applications
const Product = React.lazy(() => import('product/App'));
const Account = React.lazy(() => import('account/App'));

export default () => {
    const store = createStore();

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header sitename="POC Micro-frontend" />
                    <Navbar />
                    <SWrapper>
                        <React.Suspense fallback='Loading'>
                            <React.Fragment>
                                <Switch>
                                    <Route exact path="/">
                                        <HomePage />
                                    </Route>
                                    <Route exact path="/product">
                                        <Product />
                                    </Route>
                                    {/* Add store of the main application if the sub-application need it */}
                                    <Route exact path="/account">
                                        <Account store={store} />
                                    </Route>
                                </Switch>
                            </React.Fragment>
                        </React.Suspense>
                    </SWrapper>
                </BrowserRouter>
            </Provider>
        </>
    )
}
