// == Import
import Nav from 'react-bootstrap/Nav';
import './styles.scss'
import { useSelector } from 'react-redux';
// == Commponent
function Connection() {
  const username = useSelector((state) => state.settings.user.data.name);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);


  return (
    <div className='connection'>
    {isLoggedIn && (
      <p>Bienvenue {username}</p>
    )}
    {!isLoggedIn && (
      <><Nav.Link href="/signup">S'inscrire</Nav.Link><Nav.Link href="/login">Se connecter</Nav.Link></>
    )}
    </div>
  )
}

// == Export
export default Connection
