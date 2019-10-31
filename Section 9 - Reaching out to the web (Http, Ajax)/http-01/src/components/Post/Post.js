import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post">
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
