import PitchPositions from './PitchPositions';
import { GiSoccerBall, GiSoccerKick } from 'react-icons/gi';
import SaveButton from './SaveButton';
import usePlayerContext from '../hooks/usePlayerContext';
const Pitch = () => {
  const { playerTeam } = usePlayerContext();

  const reduce = (action) => {
    const arr = [];
    const red = Object.values(playerTeam).map((player) =>
      arr.push(
        action === 'goals' ? player.games.goals || 0 : player.games.assists || 0
      )
    );
    return arr.reduce((a, b) => a + b);
  };
  return (
    <div className="pitch">
      <div className="teamStats">
        <div className="statContent">
          <div className="goals">
            <div>
              <GiSoccerBall />
              <h2>{reduce('goals')}</h2>
            </div>
            <div>
              <GiSoccerKick />
              <h2>{reduce()}</h2>
            </div>
          </div>
          <SaveButton />
        </div>
      </div>
      <PitchPositions />
    </div>
  );
};

export default Pitch;
