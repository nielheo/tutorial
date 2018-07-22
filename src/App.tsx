import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AppBar from "./components/appBar";
import UserContext from "./contexts/userContext";
import Router from "./Router";
import UserType from "./types/userType";

interface IAppProps extends RouteComponentProps<any> {}

interface IAppStates {
  user: any;
  setUser: any;
}

class App extends React.Component<IAppProps, IAppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      setUser: this.setUser,
      user: null
    };
  }

  public setUser = (newUser: UserType | null) => {
    this.setState({
      user: newUser
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
      <UserContext.Provider value={this.state}>
        {this.props.location.pathname !== "/login" && <AppBar />}
        <Container fluid={true}>
          <Row
            className={
              this.props.location.pathname !== "/login" ? "py-3 px-2" : "p-0"
            }
          >
            <Col xs={12}>
              <Router loggedIn={this.state.user !== null} />
            </Col>
          </Row>
        </Container>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
