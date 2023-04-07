// == Import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Connection from './Connection';
import DropdownMenu from './DropDowMenu';
import SearchBar from './SearchBar';
import './styles.scss';
import swapsterLogo from '../../../assets/logo-no-background.svg';

// == Component
function Header() {
  return (
    <Navbar className="nav-menu" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Navbar.Brand className="logo" href="/">
            <img
              alt="swapsterlogo"
              src= {swapsterLogo}
              width="80"
              height="30"
              className="d-inline-block align-top"
            /> </Navbar.Brand>
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
