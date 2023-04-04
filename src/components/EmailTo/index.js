// == Import
import PropTypes from 'prop-types'
import  { Link } from 'react-router-dom'
import './style.scss'

// == Component
function EmailTo({ mailto, label }) {
  return (
    <>
        
        <Link className="contact"
          to='#'
          onClick={(event) => {
            window.location.href = mailto;
            event.preventDefault();
          }}
        >
          {label}
        </Link>

    </>
  )
}

// == Export
export default EmailTo

// == Proptypes
EmailTo.propTypes = {
  mailto: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
