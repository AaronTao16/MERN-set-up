import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { React } from 'react';
import workout from './images/workout.png';
import PostForm from "./components/Form/PostForm/PostForm.js";
import Posts from "./components/Posts/Posts.js";
import Authors from "./components/Author/authors"
import useStyles from "./style";

const App = () =>{
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            <img className={classes.image} src={workout} alt="workout icon" height="70" width="150" align="center"/>
            Workout Blog
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7} >
                <Posts />
              </Grid>
              <Grid item xs={12} sm={7} >
                <PostForm />
              </Grid>
            </Grid>
          </Container>
        </Grow>
        <Authors />
    </Container>
  );
}

export default App;
