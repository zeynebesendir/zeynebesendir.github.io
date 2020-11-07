import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import ProjectItem from './project-item';
import projects from '../static/projects';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '100vh',
        [theme.breakpoints.down('md')]: {
        }
    },
    grid: {
        padding: '2rem'
    }

    /*
    display : flex  listed items horizontally
    justifyContent : center horizontally aligned
    alignItems : center vertically aligned
    */

}));

export default function ProjectList() {
    const classes = useStyles();
    const checked = useWindowPosition('home');
    /*
    checked is the animation' s state
    animation will be run after scrolling the top (home) of the page
    useWindowPosition will check the position/offset of the home. 
    When the offset value is changed, animation will begin.
    */
    return (
        <div className={classes.root} id='project-list'>
            <Grid container spacing={0} className={classes.grid}>
                {projects.map(project => (
                    <Grid key={project.id} item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <ProjectItem project={project} checked={checked} />
                    </Grid>
                ))}
            </Grid>
        </div>);
}