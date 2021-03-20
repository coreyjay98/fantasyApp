import useSiteContext from '../hooks/useSiteContext';

const LoggedInPage = ({ logoutUser }) => {
  const { username } = useSiteContext();
  return (
    <div className="loggedIn">
      <h1>Logged In as {username}</h1>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default LoggedInPage;
