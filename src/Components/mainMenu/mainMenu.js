// @flow
import * as React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./mainMenu.css";

export const mainMenu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "images/logo/new-logo.png"}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="link-primary px-5">
                Noter
              </Nav.Link>
              <Nav.Link href="#link" className="link-primary px-5">
                Audit RSE
              </Nav.Link>
              <Nav.Link href="#home" className="link-primary px-5">
                Devenir pro
              </Nav.Link>
              <Nav.Link href="#home" className="link-primary px-4">
                Contact
              </Nav.Link>

              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="text-primary">
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
        </Container>
      </Navbar>

      {/* <Nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container-fluid">
          <Nav.Link className="navbar-brand " href="#">
            <img
              src={process.env.PUBLIC_URL + "images/logo/new-logo.png"}
              alt="logo"
            />
          </Nav.Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <Nav.Item className="nav-item">
                <Nav.Link className="nav-Nav.Itemnk text-primary" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="nav-Nav.Itemnk text-primary" href="#">
                  Features
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="nav-Nav.Itemnk text-primary" href="#">
                  Pricing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="nav-Nav.Itemnk text-primary" href="#">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item dropdown">
                <Nav.Link
                  className="nav-Nav.Itemnk dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Dropdown
                </Nav.Link>
                <div className="dropdown-menu">
                  <Nav.Link className="dropdown-item" href="#">
                    Action
                  </Nav.Link>
                  <Nav.Link className="dropdown-item" href="#">
                    Another action
                  </Nav.Link>
                  <Nav.Link className="dropdown-item" href="#">
                    Something else here
                  </Nav.Link>
                  <div className="dropdown-divider"></div>
                  <Nav.Link className="dropdown-item" href="#">
                    Separated Nav.Itemnk
                  </Nav.Link>
                </div>
              </Nav.Item>
            </ul>
          </div>
        </div>
      </Nav> */}
    </>
  );
};

export default mainMenu;
