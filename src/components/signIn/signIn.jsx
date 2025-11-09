import "./signIn.css"
function SignIn(){
    return(
               <div className="wrapper">
          <form className="the-form">
            <div>
              <h1>Sign In</h1>
            </div>

            <div class="signIn-info">
              <div class="input-box">
                <div class="input-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email@gmail.com"
                    required
                  />
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>

                <div class="input-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Pass@world"
                    required
                  />
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </div>
              </div>

              <div class="remember-forgot">
                <label>
                  <input type="checkbox" /> Remeber Me?
                </label>
                <a href="#">Reset password</a>
              </div>

              <button type="submit" class="btn-submit">
                Sign In
              </button>

              <div class="register-link">
                <p>
                  Don’t have an account? <a href="#">Register here</a>
                </p>
              </div>
            </div>
          </form>
        </div>
    )
}
export default SignIn;
