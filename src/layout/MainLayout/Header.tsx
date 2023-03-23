import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Services from "../../views/Services";
import { useLocation } from "react-router-dom";
import { isLogin, logout } from "../../services/api/userAuth";
const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/homepage">
            Al-Buraq
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-uppercase">
              <Nav.Link
                as={Link}
                to="/homepage"
                className="text-decoration-none mx-1"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-decoration-none mx-1"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="text-decoration-none mx-1"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/portfolio"
                className="text-decoration-none mx-1"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="text-decoration-none mx-1"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Button variant="outline-primary" className="text-white">
            Get Started
          </Button> */}
          <Button onClick={() => navigate("/user-profile")} className="ms-2">
            Profile
          </Button>
          <Button
            onClick={() => logout(navigate)}
            className="text-decoration-none mx-2"
          >
            Logout
          </Button>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Header;
