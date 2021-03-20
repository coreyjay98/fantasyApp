const Signup = ({ userInput, registerUser, signupError }) => {
  return (
    <div className="background">
      <div className="page signupPage">
        <div className="title">
          <h2>Sign Up </h2>
        </div>
        <div className="signup">
          <form>
            <input
              type="text"
              placeholder="Name"
              name="username"
              onChange={userInput}
              className={signupError ? 'loginError' : null}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={userInput}
              className={signupError ? 'loginError' : null}
            ></input>
            <button type="button" onClick={registerUser}>
              Sign up
            </button>
          </form>
          {signupError && (
            <div className="signupError">
              <h1>That username is taken! please try another</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
