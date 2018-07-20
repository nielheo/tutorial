import * as React from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
// import Alert from "./Alert";

export default class LoginForm extends React.Component<
  {},
  { loggingIn: boolean; email: string; password: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      loggingIn: false,
      password: ""
    };
  }

  public submit = () => {
    this.setState({
      loggingIn: true
    });
  };

  public emailOnChanged = (e: any) => {
    this.setState({
      email: e.target.value,
      loggingIn: false
    });
  };

  public passwordOnChanged = (e: any) => {
    this.setState({
      loggingIn: false,
      password: e.target.value
    });
  };

  public render() {
    return (
      <Container>
        <Row style={{ minHeight: "100vh" }} className="align-items-center">
          <Col sm={12}>
            <Card
              className="p-3"
              sm={12}
              style={{
                margin: "0 auto 100px",
                maxWidth: "400px",
                position: "relative"
              }}
            >
              <CardTitle>Login</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    disabled={this.state.loggingIn && this.state.email !== ""}
                    value={this.state.email}
                    onChange={this.emailOnChanged}
                    invalid={this.state.loggingIn && this.state.email === ""}
                  />
                </FormGroup>
                <FormGroup className="danger">
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    disabled={this.state.loggingIn}
                    value={this.state.password}
                    onChange={this.passwordOnChanged}
                  />
                </FormGroup>
                <Button
                  onClick={this.submit}
                  color={this.state.loggingIn ? "gray" : "primary"}
                  disabled={this.state.loggingIn}
                >
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
