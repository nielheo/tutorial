import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import OrderList from "./components/orderlist";

interface IRouterProps {
  loggedIn: boolean;
}

class Router extends React.Component<IRouterProps, {}> {
  public render() {
    if (!this.props.loggedIn) {
      return <Login />;
    }
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
