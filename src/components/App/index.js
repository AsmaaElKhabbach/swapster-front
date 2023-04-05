// == Import
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';

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
