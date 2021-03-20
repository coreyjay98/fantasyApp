import { useState } from 'react';
import useSiteContext from '../hooks/useSiteContext';
import Signup from './Signup';
import LoggedInPage from './LoggedInPage';
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState(null);

  const { fetchLogin, loggedIn } = useSiteContext();

  const userInput = ({ target }) => {
    if (target.name === 'username') return setUsername(target.value);
    setPassword(target.value);
  };

  const registerUser = async () => {
    const res = await fetch('/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const response = await res.json();
    if (res.ok) {
      setSignupError(null);
      fetchLogin(response);
      localStorage.setItem('token', response.token);
    } else {
      setSignupError('Error');
    }
  };

  return loggedIn ? (
    <div className="background">
      <div className="page accountPage">
        <div className="title">
          <h1>Your Account</h1>
        </div>
        <div className="accountDisplay">
          <LoggedInPage />
        </div>
      </div>
    </div>
  ) : (
    <Signup
      userInput={userInput}
      registerUser={registerUser}
      signupError={signupError}
    />
  );
};
export default SignupPage;
