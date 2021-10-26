import React from "react";
import ReactDOM from "react-dom";
import './config/startBootstrap'
import Routers from "./routers";
import GlobalStyled from "./config/GlobalStyled";

document.title = "Fox Entregas";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyled />
  </React.StrictMode>,
  document.getElementById("root")
);
