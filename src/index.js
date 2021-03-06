import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import reducer from './components/reducers/cartReducer';
const store = createStore(reducer);

ReactDOM.render(<Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>,
  document.getElementById("root")
);
