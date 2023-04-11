// == Import
import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Connexion from './Connexion';
import DropdownMenu from './DropDowMenu';
import SearchBar from './SearchBar';
import swapsterLogo from '../../../assets/logo-no-background.svg';

// == Component
function Header() {
  return (
    <header>
    <Navbar className="nav-menu" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 nav-container"
            navbarScroll
          >
            <Navbar.Brand className="logo" href="/">
            <img
              alt="swapsterlogo"
              src= {swapsterLogo}
              width="80"
              height="30"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <SearchBar />
            <div className="nav-connect">
            <Connexion />
            <DropdownMenu />
            </div>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
  );
}

// == Export
export default Header;
