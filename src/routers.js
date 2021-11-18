import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import NewOrder from "./views/NewOrder";
import NotFoundView from "./views/NotFoundView";
import { OrderSuccess } from "./views/OrderSuccess";
import Register from "./views/Register";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUSerLoggedIn = useSelector((state) => state.user.userLoggedIn);
  console.log("isUSerLoggedIn", isUSerLoggedIn);
  if (!isUSerLoggedIn) {
    return <Redirect to="/login" />;
  }
  return <Component {...rest} />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/cadastro" component={Register} exact />
        <PrivateRoute path="/novo-pedido" component={NewOrder} exact />
        <PrivateRoute path="/novo-pedido/sucesso" component={OrderSuccess} exact />
          
        <Route path="*" component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
