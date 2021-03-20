import { Link } from 'react-router-dom';
const NewUser = () => {
  return (
    <div className="newUser">
      <h2>New User? </h2>
      <h3>Press the button to sign up</h3>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default NewUser;
