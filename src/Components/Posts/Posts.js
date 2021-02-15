import React, { useContext, useState, useEffect } from "react";
import "./postStyle.css";
import { PostContext } from "../../PostContext";

import {Container, Typography , Box} from "@material-ui/core";



const BlogPost = (props) => {
  const post = useContext(PostContext);
  const [article, setArticle] = useState([]);
  const [, setPostId] = useState("");


  useEffect(() => {
    const postId = props.match.params.postId;
    const a = post.find((post) => post.id == postId);
    setArticle(a);
    setPostId(postId);
  }, []);

  return (
    <div className="blogPostContainer">
      <Container>
        <img src={article.photo} alt={article.blogTitle} className="img" />
        <div className="blogHeader">
          <h1 className="postTitle center">{article.blogTitle}</h1>
          <Typography className=" center">
            Posted on {article.postedOn} by {post.author}{" "}
          </Typography>
        </div>
        <Box m={'auto'}>
          <Typography variant="subtitle1">{article.summary}</Typography>
          <Typography variant="subtitle1">{article.blogText}</Typography>
          <Typography variant="subtitle1">{article.text3}</Typography>
          <Typography variant="subtitle1">{article.text4}</Typography>
          <Typography variant="subtitle1">{article.text5}</Typography>
          <Typography variant="subtitle1">{article.text6}</Typography>
          <Typography variant="subtitle1">{article.text7}</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BlogPost;
