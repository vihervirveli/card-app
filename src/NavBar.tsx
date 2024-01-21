import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar:React.FC = () => {
  return (
    <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className={styles.navbar}>
    <Container className={styles.navbarContainer}>
      <Navbar.Brand as={NavLink} to="/">Card App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className={styles.navLink}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/create" className={styles.navLink}>
            Create card
          </Nav.Link>
          <Nav.Link as={NavLink} to="/all" className={styles.navLink}>
            All Cards
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}

export default NavBar;