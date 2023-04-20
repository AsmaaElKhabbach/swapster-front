// == Imoort
import './homepage.scss';
import { useSelector } from 'react-redux';
import Header from '../Partials/Header/index';
<<<<<<< HEAD
import LastestAdd from './Carousel/index';
=======
import LatestAdd from './LatestAdd/index';
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import Rules from './Rules';

// == Component
function HomePage() {
<<<<<<< HEAD
  const token = useSelector((state) => state.settings.user.token);
  console.log('montoken', token);
=======
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
  return (
    <div className="page">
      <Header />
      <main>
        <Slogan />
        <Introduction />
        <Rules />
<<<<<<< HEAD
        <LastestAdd />

=======
        {isLoggedIn && (
          <LatestAdd />
        )}
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
      </main>
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
