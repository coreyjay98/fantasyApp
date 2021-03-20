import LoggedInPage from './LoggedInPage';
import LoginPage from './LoginPage';
import useSiteContext from '../hooks/useSiteContext';
const AccountPage = () => {
  const { loggedIn, loginUser, logoutUser } = useSiteContext();

  return (
    <div className="background">
      <div className="page accountPage">
        <div className="title">
          <h1>Your Account</h1>
        </div>
        <div className="accountDisplay">
          {loggedIn ? (
            <LoggedInPage logoutUser={logoutUser} />
          ) : (
            <LoginPage loginUser={loginUser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
