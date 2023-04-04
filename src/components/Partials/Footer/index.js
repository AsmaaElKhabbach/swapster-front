// == Import

import { NavLink } from 'react-router-dom';
import './style.scss';
import EmailTo from '../../EmailTo';
import { PenTool, FileText, Mail} from 'react-feather';


// == Component
function Footer() {
  const classNameLink = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;
  return (
    <>
      <footer className="footer">
      <section className="footer-intro">
          <h1 className="footer-intro-title">S</h1>
          <p className="footer-intro-slogan">Donnez une seconde vie à la culture</p>
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
    </>
  );
}
// == Export
export default Footer;
