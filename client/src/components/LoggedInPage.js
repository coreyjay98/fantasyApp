import useSiteContext from '../hooks/useSiteContext';

const LoggedInPage = () => {
  const { username, logoutUser } = useSiteContext();
  return (
    <div className="loggedIn">
      <h2>Logged in as {username}</h2>
      <button onClick={() => logoutUser()}>Log out</button>
    </div>
  );
};

export default LoggedInPage;
