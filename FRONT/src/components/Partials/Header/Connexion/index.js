// == Import
import './connexion.scss';
import Nav from 'react-bootstrap/Nav';
<<<<<<< HEAD
import { LinkContainer } from 'react-router-bootstrap';
=======
<<<<<<< HEAD
import { LinkContainer } from 'react-router-bootstrap';
=======
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
import { useSelector } from 'react-redux';

// == Commponent
function Connection() {
<<<<<<< HEAD
  // on récupére grace au hook react les données de l'utilisateur
  //  et un booleen pour géré l'affichage du nom de l'utilisateur une fois connecté
=======
<<<<<<< HEAD
  // on récupére grace au hook react les données de l'utilisateur
  //  et un booleen pour géré l'affichage du nom de l'utilisateur une fois connecté
=======
  // on récupére grace au hook react les données de l'utilisateur et un booleen pour géré l'affichage du nom de l'utilisateur une fois connecté
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
  const username = useSelector((state) => state.settings.user.data.name);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);

  return (
    <div className="user">
      {isLoggedIn && (
<<<<<<< HEAD
        <LinkContainer to="/profile">
          <Nav.Link>Bienvenue {username}</Nav.Link>
        </LinkContainer>
=======
<<<<<<< HEAD
        <LinkContainer to="/profile">
          <Nav.Link>Bienvenue {username}</Nav.Link>
        </LinkContainer>
=======
      <Nav.Link href="/profile" className="nav-link">Bienvenue {username}</Nav.Link>
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
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
