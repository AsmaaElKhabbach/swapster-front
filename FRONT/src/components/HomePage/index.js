// == Imoort
import './homepage.scss';
import { useSelector } from 'react-redux';
import Header from '../Partials/Header/index';
import LastestAdd from './Carousel/index';
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import Rules from './Rules';

// == Component
function HomePage() {
  const token = useSelector((state) => state.settings.user.token);
  console.log('montoken', token);
  return (
    <div className="page">
      <Header />
      <main>
        <Slogan />
        <Introduction />
        <Rules />
        <LastestAdd />

      </main>
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
