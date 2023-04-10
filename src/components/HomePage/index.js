// == Imoort
import Header from '../Partials/Header/index';
import LastestAdd from './Carousel/index';
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import './styles.scss';
import Rules from './Rules';

// == Component
function HomePage() {
  return (
    <div className="page">
      <Header />
      <Slogan />
      <Introduction />
      <Rules />
      <LastestAdd />
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
