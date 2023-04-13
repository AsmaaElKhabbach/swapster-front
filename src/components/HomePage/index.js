// == Imoort
import './homepage.scss';
import Header from '../Partials/Header/index';
import LastestAdd from './Carousel/index';
import Slogan from './Slogan/index';
import Introduction from './Introduction';
import Footer from '../Partials/Footer';
import Rules from './Rules';

// == Component
function HomePage() {
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
