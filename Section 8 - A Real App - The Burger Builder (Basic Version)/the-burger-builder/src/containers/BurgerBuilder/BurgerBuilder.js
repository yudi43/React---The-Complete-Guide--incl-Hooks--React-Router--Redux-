import React from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  state = {
    ingredients: {
      salad: 0,
      bacon: 1,
      cheese: 3,
      meat: 3
    }
  };

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
