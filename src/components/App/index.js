// == Import
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import BookResults from '../BookResults';
import BookPage from '../BookPage';
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';
import LegalNotice from '../LegalNotice';
<<<<<<< HEAD
import AboutUs from '../AboutUs';
import Error from '../Error';

// == Component
function App() {
=======
import Error from '../Error';

import AboutUs from '../AboutUs';

// == Component
function App() {
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);

>>>>>>> 89c2c46f3cfa7139a20e21841d809d932adeda21
  return (
    <div className="app">
      {/* Mise en place du router  */}
      <Routes>
        {/* Détail de chaque route de l'application */}
        <Route path="/" element={<HomePage />} />
        <Route path={`/book/search/${search}`} element={<BookResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
<<<<<<< HEAD
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
=======
        <Route path="*" element={<Error />} />
        <Route path="/aboutus" element={<AboutUs />} />
>>>>>>> 89c2c46f3cfa7139a20e21841d809d932adeda21
      </Routes>
    </div>
  );
}

// == Export
export default App;
