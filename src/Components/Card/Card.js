import React, {useState} from "react";
 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

//Images


const useStyles = makeStyles((theme) => ({
  con: {
    height: '100vh',
  },
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
  media: {
    height: 140,
  },
}));

const CardProps = ({tags, index}) => {
  const cardStyles = useStyles();
  return (
    <Container className={cardStyles.con}>
      <Grid
        direction="row"
        justify="space-between"
        alignItems="center"
        container
        alignContent="center"
      >
  
        <Grid key={index} item xs="auto" sm={6}>
          <Card raised="true" className={cardStyles.root}>
            <CardActionArea>
              <CardMedia
                className={cardStyles.media}
                
                
              />
              <CardContent className={cardStyles.content}>
                <Typography gutterBottom variant="h5" component="h2">
           {tags.blogTitle}
                </Typography>

                <CardContent />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
       
     
       
      </Grid>
    </Container>
  );
};

export default CardProps;


