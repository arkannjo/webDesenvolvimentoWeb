import React, { useEffect, useState } from "react";
import axios from "axios";

function EditPost({ match }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch(error => console.error(error));
  }, [match.params.id]);

  const handleSubmit = event => {
    event.preventDefault();

    const post = {
      title,
      body
    };

    axios.put(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        <label>Body</label>
        <textarea name="body" value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;
