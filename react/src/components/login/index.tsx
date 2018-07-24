import * as React from "react";

import UserContext from "../../contexts/userContext";
import LoginForm from "./loginForm";

interface ILoginStates {
  clicked: boolean;
  dataValid: boolean;
  loggingIn: boolean;
}

export default class Login extends React.Component<any, ILoginStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked: false,
      dataValid: false,
      loggingIn: false
    };
  }

  public updateClicked = (value: boolean) => {
    if (value !== this.state.clicked) {
      this.setState({
        clicked: value
      });
    }
  };

  public updateDataValid = (value: boolean) => {
    if (value !== this.state.dataValid) {
      this.setState({
        dataValid: value,
        loggingIn: value
      });
    }
  };

  public render() {
    return (
      <UserContext.Consumer>
        {({ setUser, user }) => (
          <LoginForm
            setUser={setUser}
            user={user}
            {...this.state}
            updateClicked={this.updateClicked}
            updateDataValid={this.updateDataValid}
          />
        )}
      </UserContext.Consumer>
    );
  }
}
