import * as React from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  Progress,
  Row
} from "reactstrap";
import Textbox from "../../controls/Textbox";
// import Alert from "./Alert";

interface ILoginStates {
  clicked: boolean;
  dataValid: boolean;
  loggingIn: boolean;
  email: string;
  emailInvalid: boolean;
  password: string;
  passwordInvalid: boolean;
}

export default class LoginForm extends React.Component<{}, ILoginStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked: false,
      dataValid: false,
      email: "",
      emailInvalid: true,
      loggingIn: false,
      password: "",
      passwordInvalid: true
    };
  }

  public setEmailValid = (valid: boolean) => {
    if (this.state.emailInvalid === valid) {
      this.setState({
        emailInvalid: !valid
      });
    }
  };

  public setPasswordValid = (valid: boolean) => {
    if (this.state.passwordInvalid === valid) {
      this.setState({
        passwordInvalid: !valid
      });
    }
  };

  public submit = () => {
    this.setState(
      {
        clicked: true
      },
      () => {
        const isValid = !this.state.emailInvalid && !this.state.passwordInvalid;
        if (isValid !== this.state.dataValid) {
          this.setState({
            dataValid: isValid,
            loggingIn: isValid
          });
        }
      }
    );
  };

  public emailOnChanged = (e: any) => {
    this.setState({
      email: e.target.value
    });
  };

  public passwordOnChanged = (e: any) => {
    this.setState({
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
                <Textbox
                  id="email"
                  disabled={this.state.loggingIn}
                  label="Email"
                  value={this.state.email}
                  onChange={this.emailOnChanged}
                  setValidFunction={this.setEmailValid}
                  type="email"
                  required={true}
                  validates={this.state.clicked}
                />
                <Textbox
                  id="password"
                  disabled={this.state.loggingIn}
                  label="Password"
                  value={this.state.password}
                  onChange={this.passwordOnChanged}
                  setValidFunction={this.setPasswordValid}
                  type="password"
                  required={true}
                  validates={this.state.clicked}
                />
                {this.state.loggingIn && (
                  <Progress
                    animated={true}
                    color="success"
                    value="100"
                    className="mb-2"
                  />
                )}
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
