import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }
  return (
    <React.Fragment>
      <Header onShowCard={showCartHandler} />
      {cartIsShown && <Cart />}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
