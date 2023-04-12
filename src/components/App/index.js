// == Import
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';
import LegalNotice from '../LegalNotice';

// == Component
function App() {
  return (
    <div className="app">
      {/* Mise en place du router  */}
      <Routes>
        {/* Détail de chaque route de l'application */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
