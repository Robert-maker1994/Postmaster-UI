import React, { useState, createContext, useEffect } from "react";
import Loader from "./Components/Loader/Loader";

export const PostContext = createContext({});

export const PostProvider = (props) => {
  //Setting states
  const [post, setPost] = useState();
  const [error] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  //Creating the call for posts data.
  const fetchData = async () => {
    try {
      const res = await fetch("https://postmaster-api.herokuapp.com/posts", {
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
        .then((result, data) => {
          setisLoaded(true);
          setPost(result);
        })
        .catch((error) => {
          console.warn("Something went wrong.", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isLoading = async () => {
      await fetchData();
    };
    isLoading();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <PostContext.Provider value={post}>
          {props.children}
        </PostContext.Provider>
      </div>
    );
  }
};
