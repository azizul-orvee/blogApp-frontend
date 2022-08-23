import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const UserBlogs = () => {
  const id = localStorage.getItem("userId");
  const [blogs, setBlogs] = useState([]);
  const [name, setName] = useState([])
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs.blogs));
  }, []);
  console.log(blogs, name);
  return (
    <div>
      {blogs.length !== 0 ? (
        <>
          {blogs.map((blog, index) => (
            <Blog blog={blog} name={name}/>
          ))}
        </>
      ) : (
        <div>No blogs found for this user</div>
      )}
    </div>
  );
};

export default UserBlogs;
