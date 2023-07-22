import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
   
      <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-3 shop">Seven's Shop</Navbar.Brand>
          <Nav className="me-auto navLink">
            <Nav.Link as={NavLink} style={({isActive})=>({color:isActive && "red" })} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive})=>({color:isActive && "red" })} to="/campaigns">Campaigns</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive})=>({color:isActive && "red" })} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} style={({isActive})=>({color:isActive && "red" })} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
};

export default NavbarComp;
