import LogoutButtons from "../Buttons/logoutButtons/LogoutButtons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  MAIN_STUDENT_ROUTE,
  STUDENT_PROFILE,
  ALL_HOME_WORKS,
} from "../../utils/Paths";

const StudentNavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="justify-content-between">
        <>
          <Navbar.Brand href={MAIN_STUDENT_ROUTE}>EasyToLearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={ALL_HOME_WORKS}>Домашние задания</Nav.Link>
              <Nav.Link href={STUDENT_PROFILE}>Мой профиль</Nav.Link>
              <NavDropdown title="Справочные материалы" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
        <LogoutButtons />
      </Container>
    </Navbar>
  );
};

export default StudentNavBar;
