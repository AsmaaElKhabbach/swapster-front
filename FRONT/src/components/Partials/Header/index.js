// == Import
import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Connexion from './Connexion';
import DropdownMenu from './DropDowMenu';
import SearchBar from './SearchBar';
import swapsterLogo from '../../../assets/images/logo-no-background.svg';

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
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    alt="swapsterlogo"
                    src={swapsterLogo}
                    className="logo"
                  />
                </Navbar.Brand>
              </LinkContainer>

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
