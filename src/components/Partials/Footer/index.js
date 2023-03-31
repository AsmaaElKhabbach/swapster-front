// == Import

import { NavLink } from 'react-router-dom';
import './style.scss';

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
            Legale Notice
          </NavLink>
          <NavLink
            className={classNameLink}
            to="/aboutus"
          >
            About us
          </NavLink>
          <NavLink
            className={classNameLink}
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

// == Export
export default Footer;
