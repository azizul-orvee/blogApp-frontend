import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import UserBlogs from "./components/UserBlogs";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const item = localStorage.getItem("userId");
  const dispatch = useDispatch();
  if (item) {
    dispatch(authActions.login());
  }
  console.log(item);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
