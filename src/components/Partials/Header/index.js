import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './SearchBar';
import './styles.scss';

function Header() {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Navbar.Brand className="title" href="/">Swapster</Navbar.Brand>
            <SearchBar />
            <Nav.Link href="/signup">S'inscrire</Nav.Link>
            <Nav.Link href="/login">Se connecter</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Accueil</NavDropdown.Item>
              <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
              <NavDropdown.Item href="/signup">S'inscrire</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
              <NavDropdown.Item href="/">Déconnection</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
