// == Imoort
import './homepage.scss';
import Header from '../Partials/Header/index';
import LatestAdd from './LatestAdd/index';
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import Rules from './Rules';

import { useSelector } from 'react-redux';

// == Component
function HomePage() {
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);
  return (
    <div className="page">
      <Header />
      <main>
        <Slogan />
        <Introduction />
        <Rules />
        {isLoggedIn && ( 
          <LatestAdd />
        )}
      </main>
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
