import React from "react";

import classes from "./Post.module.css";

const post = props => (
  <article className={classes.Post}>
    <h1>Title</h1>
    <div className="Info">
      <div className="Author">Author</div>
    </div>
  </article>
);

export default post;
