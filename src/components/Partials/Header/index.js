import "./styles.scss"
import Logged from "./Logged/index"
import SignupLogin from "./SignupLogin"


function Header() {
  return (
    <div class="header" role="header app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png" alt="logo swapster"/>
      <input></input>
      <Logged />
      <SignupLogin />
    </div>
  )
}

export default Header
