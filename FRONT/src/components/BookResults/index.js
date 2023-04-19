// == Import
import './bookresults.scss';
import { useSelector } from 'react-redux';
import Footer from '../Partials/Footer';
import Header from '../Partials/Header';
import BookCard from '../BookCard';

// == Component
function BookResults() {
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur des livres recherchés
  const searchResults = useSelector((state) => state.books.search.searchResults);

  return (
    <div>
      <Header />
      <main>
        <div className="books">
          {searchResults.map((books) => (
            <BookCard {...books} key={books.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Export
export default BookResults;
