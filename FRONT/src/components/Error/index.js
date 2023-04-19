// == Import ;
import { Link } from 'react-router-dom';
import './error.scss';

// == Component ;

function Error() {
  return (
    <div className="page-content">
      <div className="error">
        <div className="error-content">
          <h2>Erreur 404</h2>
          <h2>La page n'existe pas</h2>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGQyMDI2ODczNmM3MzE5Yjk2NmY4YTUxOTAyZWFjNzE5YjExNDlmZSZjdD1n/WoWm8YzFQJg5i/giphy.gif" alt="Error 404" />
          <h2><Link to="/"> Il est temps de retourner à la page d'accueil</Link></h2>
        </div>
      </div>
    </div>
  );
}

// Export
export default Error;
