// == Import 
import './rules.scss'

// == Component
function Rules() {
  return (
    <div className="post-it">
     <h1>Les règles d'or</h1>
     <ul>
      <li>
        Règle n°1 : <span>Swapster est un site gratuit.</span>
      </li>
      <li>
        Règle n°2 : <span>L'échange de produit se fait en main propre et/ou par envois.</span>
      </li>
      <li>
        Règle n°3 : <span>L'organisation du don est à la charge des utilisateurs.</span>
      </li>
     </ul>
    </div>
  )
}

// == Export
export default Rules
