import { GitHub, Linkedin } from 'react-feather';
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
              Fais ton greuh...............................
            </p>
            <div className="devBox__contact">
              <a
                href="https://www.linkedin.com/in/cielbleu92/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/minjung-kim-quere"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </div>
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
              Ahhh que tu as de grandes dents... Je veux dire blanches on se voit dedans ah oui je sais la plupart de tes casse croûte on dû te le dire tu les fais détartrer à l'eau de javel parce que tu as un sourire j' te jure.
            </p>
            <div className="devBox__contact">
              <a
                href="https://www.linkedin.com/in/asmaa-el-khabbach/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/AsmaaElKhabbach"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </div>
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
              Misère, je ne sens plus mes orteils! J'ai pas d'orteils!
            </p>
            <div className="devBox__contact">
              <a
                href="https://www.linkedin.com/in/aicha-zine/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/AichaaZine"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </div>
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
            <div className="devBox__contact">
              <a
                href="https://www.linkedin.com/in/fabien-costa-/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/FabienCosta"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </div>
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
              Tu sais ce que tout le monde aime ? Le clafoutis. T'as déjà rencontré quelqu'un à qui tu dis : « fais péter le clafoutis ! », et qui te dit, « j'aime pas le clafoutis » ? Il n'y a rien de plus clafoutant que le clafoutis !
            </p>
            <div className="devBox__contact">
              <a
                href="https://www.linkedin.com/in/fabien-costa-/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/FabienCosta"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
