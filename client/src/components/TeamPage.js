import Pitch from './Pitch';
import PlayerPageList from './PlayerPageList';
import PlayerCardDisplay from './PlayerCardDisplay';
import usePlayerContext from '../hooks/usePlayerContext';
const TeamPage = () => {
  const { selectedPlayer } = usePlayerContext();
  return (
    <div className="background">
      <div className="page teamPage">
        <div className="teamContent">
          <Pitch />
        </div>
        <div className="playerContent">
          {selectedPlayer.firstName ? (
            <PlayerCardDisplay player={selectedPlayer} />
          ) : null}
          <PlayerPageList />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
