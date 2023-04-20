// == Import
import './menu.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
<<<<<<<< HEAD:FRONT/src/components/Partials/Header/DropDowMenu/index.js
import { logout } from '../../../../store/reducers/settings';
import { LinkContainer } from 'react-router-bootstrap';
========
import { Route, Routes } from 'react-router-dom';

>>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2:src/components/Partials/Header/DropDowMenu/index.js
=======
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
import { logout } from '../../../../store/reducers/settings';
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88

>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
// == Component
function DropdownMenu() {
  // on récupère le hook react-redux qu'on stock dans une variable pour gérer la modification des données
  const dispatch = useDispatch();

  // Fonction qui permet à l'utilisateur de se déconnecter
  const handleLogout = () => {
    // on modifie grace au hook react-redux et l'action présente dans le reducer settings
<<<<<<< HEAD
    dispatch(deleteAccount());
=======
<<<<<<< HEAD
    dispatch(deleteAccount());
=======
    dispatch(logout());
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
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
<<<<<<< HEAD
        style={{
          display: 'flex',
        }}
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
=======
<<<<<<< HEAD
        style={{
          display: 'flex',
        }}
=======
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
      >
        <NavDropdown.Item href="/">Accueil</NavDropdown.Item>
        <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
        <NavDropdown.Item href="/signup">S'inscrire</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout} href="/">Déconnection</NavDropdown.Item>
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
      </NavDropdown>
    </div>
  );
}

// == Export
export default DropdownMenu;
