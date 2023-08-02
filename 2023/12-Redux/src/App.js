import Counter from "./components/Counter";
import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Counter />
    </React.Fragment>
  );
}

export default App;
