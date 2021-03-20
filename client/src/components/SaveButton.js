import usePlayerContext from '../hooks/usePlayerContext';

const SaveButton = () => {
  const { playerTeam } = usePlayerContext();

  const savePlayerTeam = async (event) => {
    event.preventDefault();
    const access = await localStorage.getItem('token');
    const res = await fetch('api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: access },
      body: JSON.stringify({ playerTeam }),
    });
    try {
      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="saveButton" onClick={savePlayerTeam}>
      <button>Save Team</button>
    </div>
  );
};

export default SaveButton;
