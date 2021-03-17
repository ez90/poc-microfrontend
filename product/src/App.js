import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    menu: {
        padding: theme.spacing(2, 3, 2),
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Cats() {
    const classes = useStyles();
    const cards = [1, 2, 3];

    return (
        <>
            {
                cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cat
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the cat.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </>
    );
}

function Dogs() {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {
                cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dog
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the dog.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </>
    );
}

export default () => {
    const classes = useStyles();

    return (
        <Router>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Box bgcolor="secondary.main">
                        <Typography className={classes.menu} bgcolor="secondary.main">
                            <Link to="/product/cats">
                                Cats
                                </Link>
                            <Link to="/product/dogs">
                                Dogs
                            </Link>
                        </Typography>
                    </Box>
                    <Box bgcolor="primary.main" padding={10}>
                        <Grid container spacing={4}>
                            <Switch>
                                <Route exact path="/product">
                                    <div>
                                        Sub Application with just an internal router !
                                    </div>
                                </Route>
                                <Route exact path="/product/cats">
                                    <Cats />
                                </Route>
                                <Route exact path="/product/dogs">
                                    <Dogs />
                                </Route>
                            </Switch>
                        </Grid>
                    </Box>
                </Container>
        </Router>
    )
}
