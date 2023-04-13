import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';
import './styles.scss';

function AboutUs() {
  return (
    <div>
      <Header />
      <main>
        <h1>A propos de la team Swapster</h1>
        <div className="devBox">

          {/* debut de la card dev */}
          <div className="devBox__profil">
            <div className="devBox__name">
              <h3>
                Min Jung
              </h3>
              <p>BackDev/Lead Back</p>
            </div>
            <img
              className="devBox__profilPic"
              src="https://i.redd.it/yy3haosof2h71.jpg"
              alt="Fabien"
            />
            <p className="devBox__presentation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis accusamus molestiae earum rerum natus corporis quas,
              odit, tenetur autem, saepe possimus iusto et beatae atque enim
              explicabo architecto eos. Itaque!
            </p>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers mon LinkedIn
            </a>
          </div>
          {/* fin de la card dev */}

          <div className="devBox__profil">
            <div className="devBox__name">
              <h3>
                Asmaa
              </h3>
              <p>BackDev/Product Owner</p>
            </div>
            <img
              className="devBox__profilPic"
              src="https://img1.picmix.com/output/stamp/normal/7/8/9/9/1309987_9a17f.png"
              alt="Fabien"
            />
            <p className="devBox__presentation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis accusamus molestiae earum rerum natus corporis quas,
              odit, tenetur autem, saepe possimus iusto et beatae atque enim
              explicabo architecto eos. Itaque!
            </p>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers mon LinkedIn
            </a>
          </div>

          <div className="devBox__profil">
            <div className="devBox__name">
              <h3>
                Aicha
              </h3>
              <p>FrontDev/Srum Master</p>
            </div>
            <img
              className="devBox__profilPic"
              src="https://www.meme-arsenal.com/memes/f7d3734656733faae379c7d0a45fd87e.jpg"
              alt="Fabien"
            />
            <p className="devBox__presentation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis accusamus molestiae earum rerum natus corporis quas,
              odit, tenetur autem, saepe possimus iusto et beatae atque enim
              explicabo architecto eos. Itaque!
            </p>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers mon LinkedIn
            </a>
          </div>

          <div className="devBox__profil">
            <div className="devBox__name">
              <h3>
                Oumima
              </h3>
              <p>FrontDev/Lead Front</p>
            </div>
            <img
              className="devBox__profilPic"
              src="https://anniversaire-celebrite.com/upload/250x333/nain-tracassin-250.jpg"
              alt="Fabien"
            />
            <p className="devBox__presentation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis accusamus molestiae earum rerum natus corporis quas,
              odit, tenetur autem, saepe possimus iusto et beatae atque enim
              explicabo architecto eos. Itaque!
            </p>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers mon LinkedIn
            </a>
          </div>

          <div className="devBox__profil">
            <div className="devBox__name">
              <h3>
                Fabien
              </h3>
              <p>FrontDev/Git Master</p>
            </div>
            <img
              className="devBox__profilPic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwkmbMxLB7pKNNRtt7g8v0xnlQBLGnyl3Hl_W2Gt7aVWoNydmK7r3s-YZL-Li8vY5odc&usqp=CAU"
              alt="Fabien"
            />
            <p className="devBox__presentation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis accusamus molestiae earum rerum natus corporis quas,
              odit, tenetur autem, saepe possimus iusto et beatae atque enim
              explicabo architecto eos. Itaque!
            </p>
            <a
              href="https://www.linkedin.com/in/fabien-costa-/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers mon LinkedIn
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
