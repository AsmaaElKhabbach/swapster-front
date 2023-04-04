// == Import
import HomePage from '../HomePage';
import './styles.scss';
import { Routes, Route} from 'react-router-dom'

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
