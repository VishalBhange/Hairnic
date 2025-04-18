import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="p-3 bgimg header">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3">
          Hairnic
        </Navbar.Brand>

        {/* Toggler for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className="ms-lg-4">About</Nav.Link>
            <Nav.Link as={Link} to="/Shampoo" className="ms-lg-4">Products</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown" className="ms-lg-4">
              <NavDropdown.Item as={Link} to="/Features">Features</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Htuse">How to Use</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Testimonial">Testimonial</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Articles">Blog Articles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Notfound">404 Page</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Contact" className="ms-lg-4">Contact</Nav.Link>
            <Button variant="dark" className="ms-lg-4 mt-2 mt-lg-0">Shop Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
