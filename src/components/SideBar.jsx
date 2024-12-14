import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Navbar bg="black" expand="md" className="flex-column align-items-center p-3 navbar fixed-left" id="sidebar">
      <div className="container flex-column align-items-start">
        <Navbar.Brand className="mb-4">
          <img src="/src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center text-secondary">
                <HouseDoorFill className="text-secondary me-2" /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="d-flex align-items-center text-secondary">
                <BookFill className="text-secondary me-2" /> Your Library
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Form className="d-flex">
                <InputGroup className="mt-3">
                  <Form.Control type="text" placeholder="Search" aria-label="Search" />
                  <Button variant="outline-secondary" size="sm">
                    GO
                  </Button>
                </InputGroup>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="nav-btn mt-auto d-flex flex-column">
        <Button variant="light " className="rounded-pill  signup-btn mr-2">
          Sign Up
        </Button>
        <Button variant="dark" className=" rounded-pill  border-white mt-4 login-btn">
          Login
        </Button>
        <div className="mt-3 text-center">
          <a href="#" className="text-decoration-none text-secondary">
            Cookie Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-decoration-none text-secondary">
            Privacy
          </a>
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;