// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
// import rootReducer from './store/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> c5eca925526a51a1c5cf20bf7396b8860c0e6533

// == Import : local
// Composants
import App from 'src/components/App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
<<<<<<< HEAD
  // <Provider store={store}>
=======
>>>>>>> c5eca925526a51a1c5cf20bf7396b8860c0e6533
  <BrowserRouter>
     <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
<<<<<<< HEAD
  // </Provider>
=======
 
>>>>>>> c5eca925526a51a1c5cf20bf7396b8860c0e6533
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
