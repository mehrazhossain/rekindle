import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="h3">
          rekindle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Reviews
            </Nav.Link>
            <Nav.Link href="#deets">About me</Nav.Link>
            <Nav.Link className="btn login-btn" href="#dees">
              <span className="h6">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
