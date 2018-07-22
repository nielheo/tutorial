import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AppBar from "./components/appBar";
import Router from "./Router";

interface IAppProps extends RouteComponentProps<any> {}

class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <React.Fragment>
        {this.props.location.pathname !== "/login" && <AppBar />}
        <Container fluid={true}>
          <Row
            className={
              this.props.location.pathname !== "/login" ? "py-3 px-2" : "p-0"
            }
          >
            <Col xs={12}>
              <Router />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
