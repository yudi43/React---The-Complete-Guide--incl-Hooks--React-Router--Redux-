import React from "react";

// importComponent is a function reference here.
const asyncComponent = importComponent => {
  return class extends React.Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        //'cmp' will have one property called default, which is component we loaded dynamically
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
