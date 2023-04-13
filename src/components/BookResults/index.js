
// == Import
import './bookresults.scss'
import Footer from "../Partials/Footer"
import Header from "../Partials/Header"
import BookCard from '../BookCard'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// == Component
function BookResults() {
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur des livres recherchés
  // const search = useSelector((state) => state.books.searchResults);

  return (
    <div>
    <Header />
    <main>
      <div>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <BookCard />
            </Col>
          ))}
        </Row>
      </div>
    </main>
    <Footer />
  </div>
  )
}

// Export
export default BookResults
