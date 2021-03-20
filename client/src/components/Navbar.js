import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <div className="logo"></div>
      </div>
      <div className="navigation">
        <NavLink exact to="/" className="navlink">
          Home
        </NavLink>
        <NavLink exact to="/team" className="navlink">
          Team
        </NavLink>
        <NavLink exact to="/account" className="navlink">
          Account
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
