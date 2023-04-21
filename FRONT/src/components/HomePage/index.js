// == Imoort
import './homepage.scss';
import { useSelector } from 'react-redux';
import Header from '../Partials/Header/index';
import Carrousel from './Carrousel';
import LatestAdd from './LatestAdd/index';
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import Rules from './Rules';

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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
