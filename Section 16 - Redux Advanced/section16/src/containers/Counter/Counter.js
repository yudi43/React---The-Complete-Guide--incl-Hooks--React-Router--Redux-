import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import {
  increment,
  decrement,
  increment_val,
  decrement_val,
  store_res,
  delete_res
} from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onIncrementValue} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecrementValue}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onIncrementValue: () => dispatch(increment_val(5)),
    onDecrementValue: () => dispatch(decrement_val(5)),
    onStoreResult: result => dispatch(store_res(result)),
    onDeleteResult: id => dispatch(delete_res(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
