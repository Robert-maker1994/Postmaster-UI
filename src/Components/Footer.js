import React from 'react'
import { Container, Divider, makeStyles } from '@material-ui/core'

//Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import { about, blog,  home } from '../Routing/Routing';

const useStyles = makeStyles((theme) => ({ 
    logo: {
    
            maxHeight: '52px' ,
        },
        signup: {
            display: 'inline-grid',
            justifyContent: 'center'
        },
        footdiv: {
            margin: '50px 0 50px 50px',
            display: 'flex',
        }, 
        link: {
            display: 'inline',

            textDecoration: 'none',
            padding: '20px' ,
            alignself:  'center',
        },
        button: {
            margin: '5px auto',
            border: '2px #2a2a2a solid',
            width: '50%',

            "&:hover": {
                backgroundColor: '#2a2a2a',
                color: '#ffffff'
              }
            }

}));


export default function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.footer}>
            
            
      <div className={classes.footdiv}>
                <div style={{margin: '0 0 0 auto'}} >
                    <InstagramIcon color="primary" />
                    <TwitterIcon color="primary"/>
                    <FacebookIcon  color="primary"/>
                </div>
            </div>
            <Divider />
            <div style={{display: 'flex'}} >
            <Link className={classes.link} to={blog}>Blog</Link> 
            <Link className={classes.link} to={home}>Home</Link>
            <Link className={classes.link} to={about}>About</Link> 
                <p style={{margin: 'auto'}}>© Copyright 2019 - 2021 PostMaster. All Rights Reserved.</p>
            </div>

        </Container>
    )
}
