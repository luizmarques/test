import React from "react";
import ReactDOM from "react-dom";
import "./config/startBootstrap";
import Routers from "./routers";
import GlobalStyled from "./config/GlobalStyled";
import { Provider } from "react-redux";
import store from "./store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

document.title = "Fox Entregas";

const payPalOptions = {
  "client-id": "Af1dP_xoW2t3pc9y_2J8c3HFapVikKg_0GA2T1GbYDH8xtiQB-ywZnBjwe_LN_fwzKqAB14VTu8BHNp2",
  currency: "BRL"
}


ReactDOM.render(
  <PayPalScriptProvider options={payPalOptions}>
    <Provider store={store}>
      <Routers />
      <GlobalStyled />
    </Provider>
  </PayPalScriptProvider>,  
  document.getElementById("root")
);
