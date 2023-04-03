// == Import

import { NavLink } from 'react-router-dom';
import './style.scss';
import EmailTo from '../../EmailTo';
import { PenTool, FileText} from 'react-feather';


// == Component
function Footer() {
  const classNameLink = ({ isActive }) => `footer-link ${isActive ? 'footer-link--active' : ''}`;
  return (
    <div>
      <footer>
        <nav className="footer">
        <section className="footer-intro">
          <h1 className="footer-intro-title">Swapster</h1>
          <p className="footer-intro-slogan">Donner une seconde vie à la culture</p>
        </section>
        <FileText className="footer-icon"/>
          <NavLink
            className={classNameLink}
            to="/legalnotice"
          >
            Mentions Légales
          </NavLink>
          <PenTool className="footer-icon"/>
          <NavLink
            className={classNameLink}
            to="/aboutus"
          >
            About us
          </NavLink>
          <EmailTo  label="Nous Contacter" mailto="mailto:infos.swapster@gmail.com" />
        </nav>
      </footer>
    </div>
  );
}
// == Export
export default Footer;
