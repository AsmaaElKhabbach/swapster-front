// == Import

import { NavLink } from 'react-router-dom';
import './styles.scss';
import EmailTo from '../../EmailTo';
import { PenTool, FileText, Mail} from 'react-feather';


// == Component
function Footer() {

  const classNameLink = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <div className= "footer">
      <footer className="footer-container">
      <section className="container-intro">
          <h1 className="container-intro-title">S</h1>
          <p className="container-intro-slogan">Donnez une seconde vie à la culture</p>
        </section>
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
      </footer>
    </div>
  );
}
// == Export
export default Footer;
