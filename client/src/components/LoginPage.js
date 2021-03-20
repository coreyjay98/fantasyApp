import { useState } from 'react';
import NewUser from './NewUser';
import useSiteContext from '../hooks/useSiteContext';
const LoginPage = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loginError, loggedIn } = useSiteContext();

  const userInput = ({ target }) => {
    if (target.name === 'username') return setUsername(target.value);
    setPassword(target.value);
  };
  return (
    <div className="login">
      <div>
        <h2>Login to get Started</h2>
      </div>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="username"
          onChange={userInput}
          className={loginError ? 'loginError' : null}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={userInput}
          className={loginError ? 'loginError' : null}
        ></input>
        <button onClick={() => loginUser(username, password)} type="button">
          Login
        </button>
      </form>
      {loginError && (
        <div>
          <h1>Incorrect credentials, try again</h1>
        </div>
      )}
      {!loggedIn && <NewUser />}
    </div>
  );
};

export default LoginPage;
