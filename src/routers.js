import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/login";
import Register from "./views/register";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
