import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import OrderList from "./components/orderlist";

class Router extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exac={true} path="/dashboard" component={Dashboard} />
        <Route exac={true} path="/orderlist" component={OrderList} />
        <Route exac={true} path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Router;
