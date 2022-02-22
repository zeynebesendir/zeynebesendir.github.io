import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import { Link } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Nunito'
    },

    welcomeBackground: {
        backgroundColor: '#FFFFFFCC',
        width: '100%',
        alignItems: 'center',
        margin: 'auto',
        position: 'absolute',
        top: '35%'
    },

    welcomeDiv: {
        padding: '0.2rem',
        textAlign: 'center',

    },

    welcomeTxt: {
        color: '#000',
        fontSize: '2rem'
    },

    welcomeTxtColored: {
        color: '#e80071'
    },

    iconArrow: {
        color: '#e80071',
        fontSize: '4rem'
    },

    iconImage: {
        color: '#000',
        fontSize: '1rem'
    },

    iconButton: {
        color: '#000',
        fontSize: '2rem'
    },

    contactDiv: {
        width: '3.5rem',
        position: 'fixed',
        right: '0',
        top: '40%',
        zIndex: '2'
    }
}));

export default function Home() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='home'>

            <div className={classes.welcomeBackground}>
                <Collapse in={checked}   {...(checked ? { timeout: 1000 } : {})} collapsedHeight={15}>
                    <div className={classes.welcomeDiv}>
                        <h1 className={classes.welcomeTxt}>
                            Hello,   I'm   <span className={classes.welcomeTxtColored}> Zeyneb</span>.
                            <br />
                            I am a Frontend Developer
                        </h1>
                        <h2><LocationOnIcon className={classes.iconImage} /> Epsom, UK </h2>
                        <div>
                            <Link to='project-list' smooth={true}>
                                <IconButton>
                                    <ExpandMoreIcon className={classes.iconArrow} />
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className={classes.contactDiv}>
                <IconButton onClick={() => {
                    window.open('https://github.com/zeynebesendir');
                }}>
                    <GitHubIcon className={classes.iconButton} />
                </IconButton>

                <IconButton onClick={() => {
                    window.open('https://www.linkedin.com/in/zeynebesendir');
                }}>
                    <LinkedInIcon className={classes.iconButton} />
                </IconButton>
                <IconButton onClick={() => {
                    window.open('mailto:hi.zeyneb@gmail.com');
                }}>
                    <EmailIcon className={classes.iconButton} />
                </IconButton>
            </div>
        </div>
    );
}
