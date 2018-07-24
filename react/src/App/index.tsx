import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import UserType from "../types/userType";
import AppForm from "./appForm";

interface IAppProps extends RouteComponentProps<any> {}

interface IAppStates {
  resetUser: any;
  user: any;
  setUser: any;
}

class App extends React.Component<IAppProps, IAppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      resetUser: this.resetUser,
      setUser: this.setUser,
      user: null
    };
  }

  public setUser = (newUser: UserType | null) => {
    this.setState({
      user: newUser
    });
  };

  public resetUser = () => {
    this.setState({
      user: null
    });
  };

  public componentWillMount() {
    if (!this.state.user && this.props.location.pathname !== "/login") {
      this.props.history.push("/login");
    }
    if (this.state.user !== null && this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  }

  public componentDidUpdate() {
    if (!this.state.user && this.props.location.pathname !== "/login") {
      this.props.history.push("/login");
    }
    if (this.state.user !== null && this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  }

  public render() {
    return (
      <AppForm
        user={this.state.user}
        setUser={this.state.setUser}
        resetUser={this.state.resetUser}
      />
    );
  }
}

export default withRouter(App);
