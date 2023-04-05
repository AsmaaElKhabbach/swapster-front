// == Import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Connection from './Connection';
import DropdownMenu from './DropDowMenu';
import SearchBar from './SearchBar';
import './styles.scss';

// == Component
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
            <Connection />
            <DropdownMenu />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

// == Export
export default Header;
