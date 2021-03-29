import Pitch from './Pitch';
import PlayerPageList from './PlayerPageList';
import PlayerCardDisplay from './PlayerCardDisplay';
import usePlayerContext from '../../hooks/usePlayerContext';
import useSiteContext from '../../hooks/useSiteContext';
import LoginAlert from './LoginAlert';
const TeamPage = () => {
  const { selectedPlayer } = usePlayerContext();
  const { loggedIn } = useSiteContext();
  return (
    <div className="background">
      <div className="page teamPage">
        {loggedIn ? (
          <>
            <div className="teamContent">
              <Pitch />
            </div>
            <div className="playerContent">
              {selectedPlayer.firstName ? (
                <PlayerCardDisplay player={selectedPlayer} />
              ) : null}
              <PlayerPageList />
            </div>
          </>
        ) : (
          <LoginAlert />
        )}
      </div>
    </div>
  );
};

export default TeamPage;
