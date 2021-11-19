import { useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./config/history";

import Home from "./views/Home";
import Login from "./views/Login";
import NewOrder from "./views/NewOrder";
import NotFoundView from "./views/NotFoundView";
import { OrderSuccess } from "./views/OrderSuccess";
import Register from "./views/Register";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUSerLoggedIn = useSelector((state) => state.user.userLoggedIn);
  if (!isUSerLoggedIn) {
    return <Redirect to="/login" />;
  }
  return <Component {...rest} />;
};

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/cadastro" component={Register} exact />
        <PrivateRoute path="/novo-pedido" component={NewOrder} exact />
        <PrivateRoute path="/novo-pedido/sucesso" component={OrderSuccess} exact />
          
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
};

export default Routers;
