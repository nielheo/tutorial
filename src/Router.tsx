import * as React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import OrderList from "./components/orderlist";

class Router extends React.PureComponent {
  public render() {
    return (
      <React.Fragment>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/orderlist" component={OrderList} />
      </React.Fragment>
    );
  }
}

export default Router;
