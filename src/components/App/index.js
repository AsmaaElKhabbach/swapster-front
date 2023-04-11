// == Import
import HomePage from '../HomePage';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';
import UserPage from '../Profil';

// == Component
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
=======
        <Route path="/profile" element={<UserPage />} />
>>>>>>> 333c700b1432721910de030b84a5e543b8fb0c2f
      </Routes>
    </div>
  );
}

// == Export
export default App;
