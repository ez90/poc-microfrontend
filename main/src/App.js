import React from 'react';
import Header from "./components/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import createStore from './createStore';

const useStyles = makeStyles((theme) => ({
    menu: {
        padding: theme.spacing(2, 3, 2),
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));

// Lazy loaded sub-applications
const Product = React.lazy(() => import('product/App'));
const Account = React.lazy(() => import('account/App'));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Micro content architecture HOW ?
                 </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Technos : webpack, rush, react
                </Typography>
            </Container>
        </div>
    );
}

export default () => {
    const classes = useStyles();
    const store = createStore();

    return (
        <>
            <CssBaseline />
            <Provider store={store}>
                <BrowserRouter>
                    <Header sitename="POC Micro-frontend" />
                    <Typography className={classes.menu}>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/product">
                            Products
                        </Link>
                        <Link to="/account">
                            Account
                        </Link>
                    </Typography>
                    <main>
                        <React.Suspense fallback='Loading'>
                            <React.Fragment>
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
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
                    </main>
                </BrowserRouter>
            </Provider>
        </>
    )
}
