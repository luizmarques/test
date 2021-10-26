import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
