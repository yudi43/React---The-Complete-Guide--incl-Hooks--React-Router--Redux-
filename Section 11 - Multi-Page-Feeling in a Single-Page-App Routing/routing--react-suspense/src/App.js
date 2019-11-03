import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import Posts from './containers/Posts';
import User from "./containers/User";
import Welcome from "./containers/Welcome";

const Posts = React.lazy(() => import("./containers/Posts"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          {/* <Route path="/posts" component={Posts} /> */}
          <Route
            path="/posts"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Posts />
                </React.Suspense>
              );
            }}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
