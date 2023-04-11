// == Import
import Nav from 'react-bootstrap/Nav';
import './styles.scss';
import { useSelector } from 'react-redux';
// == Commponent
function Connection() {
  const username = useSelector((state) => state.settings.user.data.name);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);

  return (
<<<<<<< HEAD

=======
>>>>>>> 333c700b1432721910de030b84a5e543b8fb0c2f
    <div className="d-flex">
      {isLoggedIn && (
      <Nav.Link href="/profile" className="nav-link">Bienvenue {username}</Nav.Link>
      )}
      {!isLoggedIn && (
<<<<<<< HEAD
      <>
        <Nav.Link href="/signup">S'inscrire</Nav.Link>
        <Nav.Link href="/login">Se connecter</Nav.Link>
      </>
      )}

    </div> // Ajout de la fermeture de la première balise div
=======
      <><Nav.Link href="/signup">S'inscrire</Nav.Link><Nav.Link href="/login">Se connecter</Nav.Link></>
      )}
    </div>
>>>>>>> 333c700b1432721910de030b84a5e543b8fb0c2f
  );
}

export default Connection;
