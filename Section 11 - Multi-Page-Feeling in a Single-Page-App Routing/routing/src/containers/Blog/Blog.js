import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

// import axios from "axios";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
// we are now loading NewPost dynamically using lazyLoading
import asyncComponent from "../../HOC/asyncComponent";
import "./Blog.css";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>404 Component not found</h1>} />
          {/* <Redirect from="/" to="/posts/" /> */}
          {/* <Route path="/" component={Posts} /> 1st way of redirecting */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
