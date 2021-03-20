import { useState, createContext } from 'react';
import FetchLogin from '../hooks/FetchLogin';
import setStorage from '../functions/setStorage';
import usePlayerContext from '../hooks/usePlayerContext';

const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const { setPlayerTeam } = usePlayerContext();

  const loginUser = async (username, password) => {
    const response = await FetchLogin(username, password);
    console.log(response);
    if (response.success) {
      setUsername(response.username);
      setStorage(response.token);
      setLoginError(false);
      setLoggedIn(true);
    } else {
      setLoginError(true);
    }
  };

  const writeUsername = (username) => {
    setUsername(username);
  };
  const fetchLogin = (response) => {
    setUsername(response.username);
    setPlayerTeam(response.userTeam);
    setLoginError(false);
    setLoggedIn(true);
  };

  const logoutUser = async () => {
    localStorage.clear();
    setUsername('');
    setLoggedIn(false);
  };
  return (
    <SiteContext.Provider
      value={{
        loggedIn,
        loginUser,
        fetchLogin,
        logoutUser,
        username,
        writeUsername,
        loginError,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
