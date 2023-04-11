// == Import
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';

// == Component
function LastestAdd() {
  return (
<div className='lastestadd'>
      <h1>Dernier ajout de livre</h1>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="carousel-img"
            src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-tome-1-la-fraternite-de-l-anneau/9782266282369-475x500-1.webp"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel-img"
            src="https://www.gallimard-jeunesse.fr/assets/media/cache/cover_medium/gallimard_img/image/J02872.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LastestAdd;
