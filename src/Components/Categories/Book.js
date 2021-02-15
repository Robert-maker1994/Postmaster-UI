import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Loader from '../Loader/Loader';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Loader from "../Loader/Loader";

function Book() {
  const [book, setBook] = useState([]);
  const [error] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const res = fetch("https://postmaster-api.herokuapp.com/book", {
      method: "get",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((result) => {
        setisLoaded(true);
        setBook(result);
      })
      .catch((error) => {
        console.warn("Oh no amigo, we have a problem.", error);
      });
    return () => {
      return res;
    };
  }, []);

  // Show loading Page before call.
  //Have posts all lined up in map posts.

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <Container>
        <Box p={20} spacing={5}>
          <Typography p={20} variant="h2" color="primary">
            Book reviews!
          </Typography>
        </Box>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          container
          alignContent="center"
        >
          {book.map((blogs) => {
            // returning the posts
            return (
              <Grid
                item
                justify="center"
                xs="auto"
                key={blogs.id}
                component={Link}
                to={`/post/${blogs.id}`}
                size="small"
              >
                <Card raised>
                  <CardActionArea>
                    <CardMedia>
                      <img
                      alt='#'
                        height="auto"
                        width="100%"
                        src={blogs.photo}
                        title={blogs.blogTitle}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blogs.blogTitle}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {blogs.blogCategory}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default Book;
