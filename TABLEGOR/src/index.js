import React from "react";
import ReactDOM from "react-dom";
import App from "./navigation/App";
import "./scss/main.scss";
import reducer from "./store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

ReactDOM.render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);