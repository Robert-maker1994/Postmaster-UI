import {
  Box,
  Container,
  makeStyles,
  Typography,
  Zoom,
  Grid, Button
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { book, cook, featured } from "../Routing/Routing";
import Blog from "./Blog";

const styles = makeStyles((theme) => ({
  root: {
    height: '60vh',  
  },
}));

function Home()  {
  const style = styles();

 


  return (
    <div>
    <Container>
        <Box p={5} className={style.root}>
          <Zoom in p={5} color="primary" timeout={1000}>
            <Typography  variant="h3">
                PostMaster!
            </Typography>
          </Zoom>
          <Zoom in p={5} timeout={2000} color="primary">
            <Typography mt="3"  variant="h3">
              Coder, Athlete, Chef.
            </Typography>
          </Zoom>
        </Box>
        <Container spacing={5}>
          <Grid  direction="row"
          justify="center"
          alignItems="center" container >
          <Zoom in timeout={3000} color="primary">
              <Grid item xs={6}  >
                <Button component={Link} to={cook}  size='large' color="primary"  variant='contained'>
                  Cooking.
                </Button>
              </Grid>
              </Zoom>
              <Zoom in timeout={3000} color="primary">
              <Grid item xs={5}>
                <Button component={Link} to={featured}   size='large' variant='contained'  color="primary">
                  Featured.
                </Button>
              </Grid>
              </Zoom>
              <Zoom in timeout={3000} color="primary">
              <Grid item xs={5} >
                <Button component={Link} to={book} size='large' variant='contained' color="primary">
                  Book.
                </Button>
              </Grid>
              </Zoom>
              
          </Grid>
        </Container>
        <Blog />
        </Container>
     </div>
  );
}

export default Home;
