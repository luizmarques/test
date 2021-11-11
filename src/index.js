import React from "react";
import ReactDOM from "react-dom";
import "./config/startBootstrap";
import Routers from "./routers";
import GlobalStyled from "./config/GlobalStyled";
import { Provider } from "react-redux";
import store from "./store";

document.title = "Fox Entregas";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
      <GlobalStyled />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
