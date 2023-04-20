// == Import
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import BookResults from '../BookResults';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import BookPage from '../BookPage';
=======
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';
import LegalNotice from '../LegalNotice';
import AboutUs from '../AboutUs';
import Error from '../Error';

// == Component
function App() {
<<<<<<< HEAD
<<<<<<<< HEAD:FRONT/src/components/App/index.js
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);
========
    // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
    const search = useSelector((state) => state.books.userSearch);
>>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2:src/components/App/index.js

=======
<<<<<<< HEAD
  // grace au hook react-redux on récupère la donnée qui correspond
  //  a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);
=======
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);

>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
  return (
    <div className="app">
      {/* Mise en place du router  */}
      <Routes>
        {/* Détail de chaque route de l'application */}
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/book/search" element={<BookResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
=======
<<<<<<< HEAD
        <Route path={`/book/search/${search}`} element={<BookResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
=======
        <Route path="/book/search" element={<BookResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="*" element={<Error />} /> */}
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
      </Routes>
    </div>
  );
}

// == Export
export default App;
