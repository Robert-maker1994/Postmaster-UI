import React from 'react';
import { Container, Grid, Typography, makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({ 
    title: {
        margin: "40px 0",

    },

}))

function About() {
   const style = useStyles();

    return (
        
        <Container className={style.root}>
        <Grid container direction='column'
          justify="center"
          alignItems="center"
          spacing={10} >
           <Grid item>
        <Typography className={style.title}  variant="h3" color="primary">
            About Us
        </Typography>
        </Grid>
        <Grid item  xs={10}>
        <Typography  className={style.title}  variant="body1"  >
        Welcome to RPL blogs, where we are continually looking to improve our
        skills and sharing knowledge. Having been a professional chef for ten
        years, I love all the process of cooking. I would like to have an online
        recipe bible. My passion for exercise also goes hand in hand with
        cooking. We love pushing ourselves to see how far we can go, the mental
        battles you face within yourself when you're running a marathon or a
        speeding through a century bike ride. I'm doing this mainly through
        curiosity, so I have no plan of where I want to take the website. Want
        to be kept in the loop for when I do have an idea, join the monthly
        newsletter, I promise you will learn something new from it every month.
        </Typography>
        </Grid>
        </Grid>    
</Container>        
    )
}

export default About
