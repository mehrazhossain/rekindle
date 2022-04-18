import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  if (loading) {
    return <p>Loading...</p>;
  }
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
            <Nav.Link as={'li'}>
              <CustomLink to="/">Home</CustomLink>
            </Nav.Link>
            <Nav.Link as={'li'}>
              <CustomLink to={'/blogs'}>Blog</CustomLink>
            </Nav.Link>
            <Nav.Link as={'li'}>
              <CustomLink to={'/about'}>About me</CustomLink>
            </Nav.Link>
            <Nav.Link as={'li'}>
              {user ? (
                <p onClick={handleSignOut} className="sign-out">
                  Sign out
                </p>
              ) : (
                <Link className="login" to={'/login'}>
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
