import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <MainContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
