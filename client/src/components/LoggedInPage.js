import useSiteContext from '../hooks/useSiteContext';

const LoggedInPage = () => {
  const { username, logoutUser } = useSiteContext();
  return (
    <div className="loggedIn">
      <h1>Logged In as {username}</h1>
      <button onClick={() => logoutUser()}>Log out</button>
    </div>
  );
};

export default LoggedInPage;
