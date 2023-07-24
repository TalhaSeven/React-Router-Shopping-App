import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={expanded}
      onToggle={() => setExpanded((prevExpanded) => !prevExpanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 shop">
          Seven's Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navLink">
            <Nav.Link as={NavLink} to="/products" onClick={handleNavClose}>
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/campaigns" onClick={handleNavClose}>
              Campaigns
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClose}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleNavClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
