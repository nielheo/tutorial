import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AppBar from "./components/appBar";
import Router from "./Router";

interface IAppProps extends RouteComponentProps<any> {}

class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <div>
        {this.props.location.pathname !== "/login" && <AppBar />}
        <Container fluid={true}>
          <Row className="py-3 px-2">
            <Col xs={12}>
              <Router />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
