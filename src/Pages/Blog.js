import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../PostContext";
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
import Loader from "../Components/Loader/Loader";

function Blog(props) {
  const post = useContext(PostContext);
  const [isLoaded, setisLoaded] = useState(false);


 

  if (!post) {
    return <Loader />;
  } else if (isLoaded) {
    return setisLoaded(true);
  } else {
    return (
      <Container>
        <Box p={5} >
          <Typography  variant="h3" color="primary">
            All the blog posts!
          </Typography>
        </Box>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          container
          alignContent="center"
        >
          {post.map((blogs) => {
            return (
              <Grid item xs="auto" key={blogs.id}  component={Link} to={`/post/${blogs.id}`}  size="small">
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
                      <Typography  variant="h5"   component="h2">
                        {blogs.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {blogs.category}
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

export default Blog;
