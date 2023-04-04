import Carousel from 'react-bootstrap/Carousel';
import './styles.scss';

function CarouselFade() {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-tome-1-la-fraternite-de-l-anneau/9782266282369-475x500-1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.babelio.com/couv/CVT_5953_756179.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gallimard-jeunesse.fr/assets/media/cache/cover_medium/gallimard_img/image/J02872.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
