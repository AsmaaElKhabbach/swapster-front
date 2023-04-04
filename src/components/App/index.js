// == Import
import HomePage from '../HomePage';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';

// == Component
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
