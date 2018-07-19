import * as React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import Alert from "./Alert";

export default class LoginForm extends React.Component<
  {},
  { loggingIn: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggingIn: false
    };
  }

  public submit = () => {
    this.setState({
      loggingIn: true
    });
  };

  public render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            disabled={this.state.loggingIn}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            disabled={this.state.loggingIn}
          />
        </FormGroup>
        <Button
          onClick={this.submit}
          color="primary"
          disabled={this.state.loggingIn}
        >
          Login
        </Button>
      </Form>
    );
  }
}
