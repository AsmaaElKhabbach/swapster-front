// == Import
import './footer.scss';
import { NavLink } from 'react-router-dom';
import EmailTo from '../../EmailTo';
import { PenTool, FileText, Mail} from 'react-feather';
import swapsterLogo from '../../../assets/logo-no-background.svg'

// == Component
function Footer() {

  const classNameLink = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <footer className= "footer">
      <div className="footer-container">
      <img
              alt="swapsterlogo"
              src= {swapsterLogo}
              className="footer-logo"
            />

        <nav className="nav">
        <div className="nav-content">
          <FileText className="nav-link-icon"/>
          <NavLink
            className={classNameLink}
            to="/legalnotice"
          >
            Mentions Légales
          </NavLink>
        </div>
        <div className="nav-content">
          <PenTool className="nav-link-icon"/>
          <NavLink
            className={classNameLink}
            to="/aboutus"
          >
            A propos
          </NavLink>
        </div>
        <div className="nav-content">
          <Mail className="nav-link-icon"/>
          <EmailTo className="nav-link" label="Nous Contacter" mailto="mailto:infos.swapster@gmail.com" />
        </div> 
        </nav>
      </div>
    </footer>
  );
}
// == Export
export default Footer;
