import * as React from "react";

import UserContext from "../../contexts/userContext";
import LoginForm from "./loginForm";

export default class Login extends React.Component {
  public render() {
    return (
      <UserContext.Consumer>
        {({ setUser, user }) => <LoginForm setUser={setUser} user={user} />}
      </UserContext.Consumer>
    );
  }
}
