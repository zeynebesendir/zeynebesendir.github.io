import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
    root: {

        maxWidth: 750,
        height: 640,
        backgroundColor: '#292C34',
        margin: '2rem',
        borderRadius: '12px',
        padding: '0.04rem'

    },
    media: {
        height: 500,
        objectFit: 'cover',
        objectPosition: 'left top',
        backgroundColor: '#292C34',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',

    },

    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18
    },

    descripton: {
        fontFamily: 'Nunito',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#ddd',
        fontSize: 16
    },
    buttonTxt: {
        fontFamily: 'Nunito',
        color: '#e80071',
        fontSize: 14
    },
});

export default function ImgMediaCard({ project, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked}  {...(checked ? { timeout: 2000 } : {})}>

            <Card className={classes.root}>

                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={project.imageURL}
                        title="Project"
                        component='img'
                        onClick={() => {
                            window.open(project.liveURL);
                        }}
                    />

                    <CardContent >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            className={classes.title}>
                            {project.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.descripton}>
                            {project.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" className={classes.buttonTxt} color="primary" onClick={() => {
                        window.open(project.githubURL);
                    }} >
                        GitHub
                </Button>
                    <Button size="medium" className={classes.buttonTxt} color="primary" onClick={() => {
                        window.open(project.liveURL);
                    }} >
                        Open Project
                </Button>
                </CardActions>
            </Card>

        </Collapse>
    );
}
