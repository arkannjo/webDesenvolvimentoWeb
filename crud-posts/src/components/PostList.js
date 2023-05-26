import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => console.error(error));
  }, []);

  function deletePost(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        // Remove the post from the state
        const remainingPosts = posts.filter(post => post.id !== id);
        setPosts(remainingPosts);
      });
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
