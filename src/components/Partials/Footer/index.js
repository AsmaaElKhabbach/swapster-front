// == Import

import { NavLink } from 'react-router-dom';
import './style.scss';
import { Button } from 'react-bootstrap';
import EmailTo from '../../EmailTo';

// == Component
function Footer() {
  const classNameLink = ({ isActive }) => `footer-link ${isActive ? 'footer-link--active' : ''}`;
  return (
    <div>
      <footer>
        <nav className="footer">
          <NavLink
            className={classNameLink}
            to="/legalnotice"
          >
            Mentions Légales
          </NavLink>
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
