// == Import
import './connexion.scss';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == Commponent
function Connection() {
  // on récupére grace au hook react les données de l'utilisateur
  //  et un booleen pour géré l'affichage du nom de l'utilisateur une fois connecté
  const username = useSelector((state) => state.settings.user.data.name);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);

  return (
    <div className="user">
      {isLoggedIn && (
        <LinkContainer to="/profile">
          <Nav.Link>Bienvenue {username}</Nav.Link>
        </LinkContainer>
      )}
      {!isLoggedIn && (
      <>
        <Nav.Link href="/signup">S'inscrire</Nav.Link>
        <Nav.Link href="/login">Se connecter</Nav.Link>
      </>
      )}

    </div> // Ajout de la fermeture de la première balise div
  );
}

export default Connection;
