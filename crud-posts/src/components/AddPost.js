import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const post = {
      title,
      body
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
        <label>Body</label>
        <textarea name="body" onChange={e => setBody(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPost;
