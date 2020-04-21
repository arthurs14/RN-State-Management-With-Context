import React, { createContext, useState, useReducer } from 'react';

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // with use state:
  // const [blogPosts, setBlogPosts] = useState([]);

  // const addBlogPost = post => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog Post #${blogPosts.length + 1}` },
  //   ]);
  // };

  // with useReducer:
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
