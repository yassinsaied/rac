// @flow
import * as React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./mainMenu.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const mainMenu = () => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "images/logo/new-logo.png"}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
            <Nav className="me-auto left-main-menu">
              <Nav.Link href="#home" className="link-primary px-4">
                Noter
              </Nav.Link>
              <Nav.Link href="#link" className="link-primary px-4">
                Audit RSE
              </Nav.Link>
              <Nav.Link href="#home" className="link-primary px-4">
                Devenir pro
              </Nav.Link>
              <Nav.Link href="#home" className="link-primary px-4">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-5 justify-content-end right-main-menu">
              <NavDropdown
                title={
                  <div>
                    <FontAwesomeIcon icon={faGlobe} /> FR
                  </div>
                }
                id="basic-nav-dropdown"
                className="text-primary px-3">
                <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Anglais</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home" className="link-primary px-3">
                Connexion
              </Nav.Link>

              <Nav.Link href="#home" className="link-primary inscription px-3">
                Inscription
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default mainMenu;
