// == Import

// == Component
function SignUp () {
  return (
      <div className="form">
      <div className="form-body">
          <div className="username">
              <label className="form__label" for="firstName">First Name </label>
              <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
          </div>
          <div className="email">git
              <label className="form__label" for="email">Email </label>
              <input  type="email" id="email" className="form__input" placeholder="Email"/>
          </div>
          <div className="city">
              <label className="form__label" for="city">City </label>
              <input  type="text" name="" id="city"  className="form__input"placeholder="City"/>
          </div>
          <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password"  id="password" placeholder="Password"/>
          </div>
          <div className="confirm-password">
              <label className="form__label" for="confirmPassword">Confirm Password </label>
              <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
          </div>
      </div>
      <div class="footer">
          <button type="submit" class="btn">Register</button>
      </div>
      <div class="have__account">
          <button type="submit" class="btn"><div>Already have an account</div>Log In</button>
      </div>
     
  </div>      
  )
}

// == Export
export default SignUp
