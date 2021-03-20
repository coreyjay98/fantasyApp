import PitchPosition from './positions/PitchPosition';
import usePlayerContext from '../hooks/usePlayerContext';
import SaveButton from './SaveButton';

const PitchPositions = () => {
  const { playerTeam } = usePlayerContext();
  return (
    <>
      <SaveButton />
      <div className="goal">
        <PitchPosition
          position="goalkeeper"
          customClass="goalkeeper"
          selectedPlayer={playerTeam.goalkeeper}
        />
      </div>
      <div className="defense">
        <PitchPosition
          position="rightBack"
          customClass="defender"
          selectedPlayer={playerTeam.rightBack}
        />
        <PitchPosition
          position="centreBackRight"
          customClass="defender"
          selectedPlayer={playerTeam.centreBackRight}
        />
        <PitchPosition
          position="centreBackLeft"
          customClass="defender"
          selectedPlayer={playerTeam.centreBackLeft}
        />
        <PitchPosition
          position="leftBack"
          customClass="defender"
          selectedPlayer={playerTeam.leftBack}
        />
      </div>
      <div className="midfield">
        <PitchPosition
          position="rightMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam.rightMidfield}
        />
        <PitchPosition
          position="centreMidfieldRight"
          customClass="midfielder"
          selectedPlayer={playerTeam.centreMidfieldRight}
        />
        <PitchPosition
          position="centreMidfieldLeft"
          customClass="midfielder"
          selectedPlayer={playerTeam.centreMidfieldLeft}
        />
        <PitchPosition
          position="leftMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam.leftMidfield}
        />
      </div>
      <div className="attack">
        <PitchPosition
          position="rightStriker"
          customClass="attacker"
          selectedPlayer={playerTeam.rightStriker}
        />
        <PitchPosition
          position="leftStriker"
          customClass="attacker"
          selectedPlayer={playerTeam.leftStriker}
        />
      </div>
    </>
  );
};

export default PitchPositions;
