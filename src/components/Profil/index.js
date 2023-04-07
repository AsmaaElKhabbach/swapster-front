import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';
import './styles.scss';

function UserPage() {
  return (
    <>

      <Header />
      <div className="UserPage">
        {/* parie haute de la user page */}
        <main className="topMain">
          <div className="topMain__useInfo">
            <img className="topMain__useInfo__image" src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_960_720.png" alt="profil pic" />
            <div><h1 className="topMain__useInfo__pseudo">Pseudo</h1></div>
            <div className="topMain__useInfo__about">
              <h2>about</h2>
              <p>localisation</p>
              <p>tags</p>
              <p>number of books to give</p>
            </div>
          </div>
        </main>
        {/* partie basse de la user page */}
        <main className="bottomMain">
          <div>
            <h3>
              Books page
            </h3>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
