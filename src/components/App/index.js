// == Import
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import reactLogo from './react-logo.svg';
import './styles.css';

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
