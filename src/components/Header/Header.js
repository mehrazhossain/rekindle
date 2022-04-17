import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container className="text-dark">
        <Navbar.Brand className="font-weight-bold h3">rekindle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <CustomLink to="/">Home</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to={'/blogs'}>Blogs</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to={'/about'}>About me</CustomLink>
            </Nav.Link>
            <Nav.Link className="btn login-btn">
              <span className="h6">
                <CustomLink to={'/login'}>Login</CustomLink>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
