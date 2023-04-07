// == Imoort
import Header from '../Partials/Header/index';
import LastestAdd from './Carousel/index';
import Introduction from './Introduction/index';
import Footer from '../Partials/Footer';
import './styles.scss';
// == Component
function HomePage() {
  return (
    <div className="page">
      <Header />
      <Introduction />
      <LastestAdd />
      <Footer />
    </div>
  );
}

// == Export
export default HomePage;
