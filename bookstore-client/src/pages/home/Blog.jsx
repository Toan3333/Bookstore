import React from "react";
import Title from "../../components/title/Title";
import BlogList from "../../components/blog/BlogList";

const Blog = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Title>Bài viết mới</Title>
        <BlogList></BlogList>
      </div>
    </div>
  );
};

export default Blog;
