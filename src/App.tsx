import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import AppBar from "./components/appBar";

class App extends React.Component<{}, { isOpen: boolean }> {
  public render() {
    return (
      <div>
        <AppBar />
        <Container fluid={true}>
          <Row className="py-3 px-2">
            <Col xs={12} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
