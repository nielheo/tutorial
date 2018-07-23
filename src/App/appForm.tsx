import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AppBar from "../components/appBar";
import UserContext from "../contexts/userContext";
import Router from "../Router";

interface IAppProps extends RouteComponentProps<any> {
  resetUser: any;
  user: any;
  setUser: any;
}

interface IAppStates {
  resetUser: any;
  user: any;
  setUser: any;
}

class App extends React.Component<IAppProps, IAppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      resetUser: this.props.resetUser,
      setUser: this.props.setUser,
      user: this.props.user
    };
  }

  public componentWillMount() {
    if (!this.props.user && this.props.location.pathname !== "/login") {
      this.props.history.push("/login");
    }
    if (this.props.user !== null && this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  }

  public componentDidUpdate() {
    if (!this.props.user && this.props.location.pathname !== "/login") {
      this.props.history.push("/login");
    }
    if (this.props.user !== null && this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  }

  public render() {
    return (
      <UserContext.Provider
        value={{
          resetUser: this.props.resetUser,
          setUser: this.props.setUser,
          user: this.props.user
        }}
      >
        {this.props.location.pathname !== "/login" && <AppBar />}
        <Container fluid={true}>
          <Row
            className={
              this.props.location.pathname !== "/login" ? "py-3 px-2" : "p-0"
            }
          >
            <Col xs={12}>
              <Router loggedIn={this.props.user !== null} />
            </Col>
          </Row>
        </Container>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
