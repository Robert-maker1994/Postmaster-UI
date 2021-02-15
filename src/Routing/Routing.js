import React from "react";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

// Importing automatic Dynamic Imports
 const HomePage = React.lazy(() => import("../Pages/Home"));
 const blogPage = React.lazy(() => import("../Pages/Blog"));
 const About = React.lazy(() => import("../Pages/About"));
 const Post = React.lazy(() => import("../Components/Posts/Posts"));
 const Featured = React.lazy(() => import("../Components/Categories/Featured"));
 const Cooking = React.lazy(() => import("../Components/Categories/Cooking"));
 const Book = React.lazy(() => import("../Components/Categories/Book"));



// Exporting the path
export const blog = "/blog";
export const about = "/about";
export const featured = "/featured";
export const book = "/books";
export const cook = "/cooking";
export const home = "/";

function Routing() {
  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
      <Route path={blog} component={blogPage} />
      <Route path={about} component={About} />
      <Route path="/post/:postId" component={Post} />
      <Route path={featured} component={Featured} />
      <Route path={book} component={Book} />
      <Route path={cook} component={Cooking} />
    </Switch>
  );
}
export default withRouter(Routing);
