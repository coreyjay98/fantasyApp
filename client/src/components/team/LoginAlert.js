import { NavLink } from 'react-router-dom';

const LoginAlert = () => {
  return (
    <div className="loginAlert">
      <h2>Please Login before creating a team </h2>
      <h3>
        Head to the account page or click
        <NavLink exact to="/account" className="accountLogin">
          here
        </NavLink>
      </h3>
    </div>
  );
};
export default LoginAlert;
