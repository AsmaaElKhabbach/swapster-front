// == Import
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import BookResults from '../BookResults';
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';
import LegalNotice from '../LegalNotice';
import AboutUs from '../AboutUs';
import Error from '../Error';

// == Component
function App() {
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);

  return (
    <div className="app">
      {/* Mise en place du router  */}
      <Routes>
        {/* Détail de chaque route de l'application */}
        <Route path="/" element={<HomePage />} />
        <Route path="/book/search" element={<BookResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
