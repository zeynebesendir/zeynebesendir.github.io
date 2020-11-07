import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './components/home';
import ProjectList from './components/project-list';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
}));

export default function App() {

  const classes = useStyles();

  return (<div className={classes.root} >
    <CssBaseline />
    <Home />
    <ProjectList />
  </div>);
}

/*
yarn add @material-ui/core

yarn add @material-ui/icons

npm i react-scroll
 
 */