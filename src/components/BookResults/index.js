
// == Import
import './bookresults.scss'
import Footer from "../Partials/Footer"
import Header from "../Partials/Header"
import BookCard from '../BookCard'

// == Component
function BookResults() {
  // grace au hook react-redux on récupère la donnée qui correspond a la valeur des livres recherchés
  // const search = useSelector((state) => state.books.searchResults);

  return (
    <div>
    <Header />
    <main>
      <div className='books'>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      </div>
    </main>
    <Footer />
   </div>
  )
}

// Export
export default BookResults
