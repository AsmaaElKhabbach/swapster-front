// == Import
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/reducers/settings';

// == Component
function DropdownMenu() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('handleLogout');
    dispatch(logout());
  };

  return (
    <div className="menu">
      <NavDropdown className="mb-2" title="Menu" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/">Accueil</NavDropdown.Item>
        <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
        <NavDropdown.Item href="/signup">S'inscrire</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout} href="/">Déconnection</NavDropdown.Item>
      </NavDropdown>
      {/* <Nav.Link href="#" disabled>
              Link
        </Nav.Link> */}
    </div>
  );
}

// == Export
export default DropdownMenu;
