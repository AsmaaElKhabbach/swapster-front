// == Import
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import BookResults from '../BookResults'
import BookPage from '../BookPage'
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';
import LegalNotice from '../LegalNotice';
import Error from '../Error'

// == Component
function App() {
  
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
        <Route path="/book/:bookid" element={<BookPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

// == Export
export default App;
