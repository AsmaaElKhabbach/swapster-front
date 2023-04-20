// == Import
import './menu.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
=======
import { logout } from '../../../../store/reducers/settings';
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88

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
    dispatch(logout());
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
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
=======
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
      >
        <NavDropdown.Item href="/">Accueil</NavDropdown.Item>
        <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
        <NavDropdown.Item href="/signup">S'inscrire</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout} href="/">Déconnection</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

// == Export
export default DropdownMenu;
