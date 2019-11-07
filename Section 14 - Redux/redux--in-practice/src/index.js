import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// importing the two reducers
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
