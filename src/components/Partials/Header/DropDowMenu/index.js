// == Import
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.scss'
// == Component
function DropdownMenu() {
  return (
    <div className='menu'>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/">Accueil</NavDropdown.Item>
        <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
        <NavDropdown.Item href="/signup">S'inscrire</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
        <NavDropdown.Item href="/">Déconnection</NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
              Link
        </Nav.Link> */}
    </div>
  )
}

// == Export
export default DropdownMenu
