import Header from '../Partials/Header/index';
import CarouselFade from './Carrousel/index';
import Presentation from './Presentation/index';
import Footer from '../Partials/Footer'
function HomePage() {
  return (
    <div>
      <Header />
      <Presentation />
      <CarouselFade />
      <Footer />
    </div>
  );
}

export default HomePage;
