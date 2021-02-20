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
    const articlePost = post.find((post) => post.id == postId);
    setArticle(articlePost);
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
          <div>
          <Typography variant="subtitle1">{article.summary}</Typography>
          </div>
          <div>
          <Typography variant="subtitle1">{article.blogText}</Typography>
          </div>
          <div>
          <Typography variant="subtitle1">{article.text1}</Typography>
          </div>
          <Typography variant="subtitle1">{article.text2}</Typography>
          <Typography variant="subtitle1">{article.text3}</Typography>
          <Typography variant="subtitle1">{article.text4}</Typography>
          <Typography variant="subtitle1">{article.text5}</Typography>
          <Typography variant="subtitle1">{article.text6}</Typography>
          <Typography variant="subtitle1">{article.text7}</Typography>
          <Typography variant="subtitle1">{article.text8}</Typography>
          <Typography variant="subtitle1">{article.text9}</Typography>
          <Typography variant="subtitle1">{article.text10}</Typography>
          <Typography variant="subtitle1">{article.text11}</Typography>
          <Typography variant="subtitle1">{article.text12}</Typography>
          <Typography variant="subtitle1">{article.text13}</Typography>
          <Typography variant="subtitle1">{article.text14}</Typography>
          <Typography variant="subtitle1">{article.text15}</Typography>
          <Typography variant="subtitle1">{article.text16}</Typography>
          <Typography variant="subtitle1">{article.text17}</Typography>
          <Typography variant="subtitle1">{article.text18}</Typography>
          <Typography variant="subtitle1">{article.text19}</Typography>
          <Typography variant="subtitle1">{article.text20}</Typography>
          <Typography variant="subtitle1">{article.text21}</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BlogPost;
