// == Import
import Nav from 'react-bootstrap/Nav';
import './styles.scss'
// == Commponent
function Connection() {
  return (
    <div className='connection'>
      <Nav.Link href="/signup">S'inscrire</Nav.Link>
      <Nav.Link href="/login">Se connecter</Nav.Link>
    
    </div>
  )
}

// == Export
export default Connection
