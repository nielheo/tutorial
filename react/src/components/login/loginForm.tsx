import * as React from "react";
import FacebookLogin from "react-facebook-login";
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
import UserType from "../../types/userType";

interface ILoginStates {
  email: string;
  emailInvalid: boolean;
  password: string;
  passwordInvalid: boolean;
}

interface ILoginProps {
  clicked: boolean;
  dataValid: boolean;
  loggingIn: boolean;
  setUser: any;
  updateClicked: (value: boolean) => void;
  updateDataValid: (value: boolean) => void;
  user: UserType | null;
}

export default class LoginForm extends React.Component<
  ILoginProps,
  ILoginStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      emailInvalid: true,
      password: "",
      passwordInvalid: true
    };
  }

  public setEmailValid = (valid: boolean) => {
    /* console.log("setEmailValid");
    console.log(valid);
    console.log(this.state.emailInvalid);
    console.log("--0---"); */
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
    this.props.updateClicked(true);

    const isValid = !this.state.emailInvalid && !this.state.passwordInvalid;
    if (isValid !== this.props.dataValid) {
      this.props.updateDataValid(isValid);
    }

    if (isValid) {
      this.props.setUser({ email: this.state.email });
    }
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

  public responseFacebook = (response: any) => {
    console.log(response);
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
              <div>{this.props.user && this.props.user.email}</div>
              <Form>
                <Textbox
                  id="email"
                  disabled={this.props.loggingIn}
                  label="Email"
                  value={this.state.email}
                  onChange={this.emailOnChanged}
                  setValidFunction={this.setEmailValid}
                  type="email"
                  required={true}
                  validates={this.props.clicked}
                />
                <Textbox
                  id="password"
                  disabled={this.props.loggingIn}
                  label="Password"
                  value={this.state.password}
                  onChange={this.passwordOnChanged}
                  setValidFunction={this.setPasswordValid}
                  type="password"
                  required={true}
                  validates={this.props.clicked}
                />
                {this.props.loggingIn && (
                  <Progress
                    animated={true}
                    color="success"
                    value="100"
                    className="mb-2"
                  />
                )}
                <Button
                  onClick={this.submit}
                  color={this.props.loggingIn ? "gray" : "primary"}
                  disabled={this.props.loggingIn}
                  style={{
                    width: "100%"
                  }}
                >
                  Login
                </Button>
                <Row>
                  <Col sm={12} className="py-3">
                    <FacebookLogin
                      appId="532067183877497"
                      autoLoad={true}
                      fields="name,email,picture"
                      scope="public_profile,user_friends"
                      callback={this.responseFacebook}
                    />
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
