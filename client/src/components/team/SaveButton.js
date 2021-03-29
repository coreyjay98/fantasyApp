import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import usePlayerContext from '../../hooks/usePlayerContext';

const SaveButton = () => {
  const { playerTeam } = usePlayerContext();
  const [postError, setPostError] = useState(false);
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);

  const savePlayerTeam = async (event) => {
    setPosted(false);
    setPostError(false);
    setPosting(true);
    event.preventDefault();
    console.log(playerTeam);
    const access = await localStorage.getItem('token');
    const res = await fetch('api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: access },
      body: JSON.stringify({ playerTeam }),
    });
    const response = await res.json();
    console.log(response);
    if (response.success) {
      setPosting(false);
      setPostError(false);
      return setPosted(true);
    } else {
      setPosting(false);
      return setPostError(true);
    }
  };
  return (
    <>
      <div className="saveButton">
        {posted && <h3>Team Saved!</h3>}
        {postError && <h3>Not enough players!</h3>}
        <button
          onClick={savePlayerTeam}
          className={`${postError ? 'error' : 'save'}`}
        >
          Save Team
        </button>
      </div>
      {posting && <BarLoader color={'#7f37e1'} />}
    </>
  );
};

export default SaveButton;
