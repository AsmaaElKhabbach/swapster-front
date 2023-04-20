<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2

// == Import
import './bookresults.scss'
import Footer from "../Partials/Footer"
import Header from "../Partials/Header"
import BookCard from '../BookCard'

import { useSelector } from 'react-redux';

// == Component
function BookResults() {
  //grace au hook react-redux on récupère la donnée qui correspond a la valeur des livres recherchés
   const searchResults = useSelector((state) => state.books.search.searchResults);
<<<<<<< HEAD
  console.log(searchResults)
=======

>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
  return (
    <div>
    <Header />
    <main>
      <div className='books'>
      {searchResults.map((books) => (
        <BookCard {...books} key={books.id} />
      ))}
      </div>
    </main>
    <Footer />
   </div>
  )
}

// Export
export default BookResults
<<<<<<< HEAD
=======
=======
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
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
