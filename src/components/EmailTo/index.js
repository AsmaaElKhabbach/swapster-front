// == Import
import PropTypes from 'prop-types'
import  { Link } from 'react-router-dom'
import './style.scss'
import { Mail } from 'react-feather';

// == Component
function EmailTo({ mailto, label }) {
  return (
    <div className='contact'>
        <Mail className='contact-icon'/>
        <Link className='contact-emailto'
          to='#'
          onClick={(event) => {
            window.location.href = mailto;
            event.preventDefault();
          }}
        >
          {label}
        </Link>

    </div>
  )
}

// == Export
export default EmailTo

// == Proptypes
EmailTo.propTypes = {
  mailto: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
