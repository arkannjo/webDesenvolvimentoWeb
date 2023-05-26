import React, { useEffect, useState } from "react";
import axios from "axios";

function PostDetail({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(error => console.error(error));
  }, [match.params.id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;
