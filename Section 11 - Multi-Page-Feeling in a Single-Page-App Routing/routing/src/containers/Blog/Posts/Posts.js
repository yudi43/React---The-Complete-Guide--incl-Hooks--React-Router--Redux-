import React from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
// import { Link } from "react-router-dom";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log("from posts", this.props);
    axios
      .get("/posts")
      .then(response => {
        //   console.log(response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        //   console.log(error)
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: "/posts/" + id });
    console.log(id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        // <Link to={"/posts/" + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={id => {
            this.postSelectedHandler(post.id);
          }}
        />
        //  </Link>
      ));
    }
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
