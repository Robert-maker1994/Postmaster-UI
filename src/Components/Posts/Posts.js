import React, { useContext, useState, useEffect } from "react";
import "./postStyle.css";
import { PostContext } from "../../PostContext";

import { Container, Typography, Grid } from "@material-ui/core";

const BlogPost = (props) => {
  const post = useContext(PostContext);
  const [article, setArticle] = useState([]);
  const [, setPostId] = useState("");
  // "start": "serve -s build",

  useEffect(() => {
    const postId = props.match.params.postId;
    const articlePost = post.find((post) => post.id == postId);
    setArticle(articlePost);
    setPostId(postId);
  }, []);

  return (
    <div className="blogPostContainer">
      <Container>
      <Grid container spacing={5} justify="space-evenly">
      <Grid item>
        <img src={article.photo} alt={article.blogTitle} className="img" />
        </Grid>
       
        <Grid item>
          <Typography variant="h4">{article.blogTitle}</Typography>
          <Typography className=" center">
            Posted on {article.postedOn} by {post.author}{" "}
          </Typography>
       </Grid>
       
          <Grid item>
            <Typography variant="subtitle1">{article.summary}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.blogText}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text1}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text2}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text3}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text4}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text5}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text6}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text7}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text8}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text9}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text10}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text11}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text12}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text13}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text14}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text15}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text16}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text17}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text18}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text19}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text20}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{article.text21}</Typography>
          </Grid>
                  </Grid>
       
      </Container>
    </div>
  );
};

export default BlogPost;
