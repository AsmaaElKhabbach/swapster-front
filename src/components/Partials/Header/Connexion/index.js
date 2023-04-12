// == Import
import './connexion.scss';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';

// == Commponent
function Connection() {
  // on récupére grace au hook react les données de l'utilisateur et un booleen pour géré l'affichage du nom de l'utilisateur une fois connecté
  const username = useSelector((state) => state.settings.user.data.name);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);

  return (
    <div className="user">
      {isLoggedIn && (
      <Nav.Link href="/profile" className="nav-link">Bienvenue {username}</Nav.Link>
      )}
      {!isLoggedIn && (
      <><Nav.Link href="/signup">S'inscrire</Nav.Link><Nav.Link href="/login">Se connecter</Nav.Link></>
      )}
    </div>
  );
}

// == Export
export default Connection;
