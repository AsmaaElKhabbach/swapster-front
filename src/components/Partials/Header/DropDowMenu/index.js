// == Import
import './menu.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/reducers/settings';

// == Component
function DropdownMenu() {
  // on récupère le hook react-redux qu'on stock dans une variable pour gérer la modification des données 
  const dispatch = useDispatch();

  // Fonction qui permet à l'utilisateur de se déconnecter 
  const handleLogout = () => {
    // on modifie grace au hook react-redux et l'action présente dans le reducer settings
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
