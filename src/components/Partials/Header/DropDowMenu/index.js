// == Import
import './menu.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/reducers/settings';
import { LinkContainer } from 'react-router-bootstrap';
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
      <NavDropdown
        key="start"
        className="mb-2"
        title="Menu"
        id="dropdown-button-drop-start"
        drop="start"
        variant="secondary"
      >
        <LinkContainer to ="/">
          <NavDropdown.Item >Accueil</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavDropdown.Item>Se connecter</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer  to="/signup">
          <NavDropdown.Item>S'inscrire</NavDropdown.Item>
        </LinkContainer> 
      <NavDropdown.Divider />
        <LinkContainer to="/profile">
          <NavDropdown.Item >Profil</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/">
          <NavDropdown.Item onClick={handleLogout}>Déconnection</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    </div>
  );
}

// == Export
export default DropdownMenu;
