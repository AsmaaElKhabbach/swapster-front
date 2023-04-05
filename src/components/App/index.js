// == Import
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
<<<<<<< HEAD
import SignUp from '../SignUp';

import './styles.scss';
=======
import './styles.scss';
import { Routes, Route} from 'react-router-dom'
>>>>>>> c5eca925526a51a1c5cf20bf7396b8860c0e6533

// == Component
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
