import LoggedInPage from './LoggedInPage';
import LoginPage from './LoginPage';
import useSiteContext from '../../hooks/useSiteContext';
const AccountPage = () => {
  const { loggedIn, loginUser } = useSiteContext();

  return (
    <div className="background">
      <div className="page accountPage">
        <div className="title"></div>
        <div className="accountDisplay">
          {loggedIn ? <LoggedInPage /> : <LoginPage loginUser={loginUser} />}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
