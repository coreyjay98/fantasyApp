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
          cardPos="GK"
        />
      </div>
      <div className="defense">
        <PitchPosition
          position="rightBack"
          customClass="defender"
          selectedPlayer={playerTeam.rightBack}
          cardPos="RB"
        />
        <PitchPosition
          position="centreBackRight"
          customClass="defender"
          selectedPlayer={playerTeam.centreBackRight}
          cardPos="CB"
        />
        <PitchPosition
          position="centreBackLeft"
          customClass="defender"
          selectedPlayer={playerTeam.centreBackLeft}
          cardPos="CB"
        />
        <PitchPosition
          position="leftBack"
          customClass="defender"
          selectedPlayer={playerTeam.leftBack}
          cardPos="LB"
        />
      </div>
      <div className="midfield">
        <PitchPosition
          position="rightMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam.rightMidfield}
          cardPos="RM"
        />
        <PitchPosition
          position="centreMidfieldRight"
          customClass="midfielder"
          selectedPlayer={playerTeam.centreMidfieldRight}
          cardPos="CM"
        />
        <PitchPosition
          position="centreMidfieldLeft"
          customClass="midfielder"
          selectedPlayer={playerTeam.centreMidfieldLeft}
          cardPos="CM"
        />
        <PitchPosition
          position="leftMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam.leftMidfield}
          cardPos="LM"
        />
      </div>
      <div className="attack">
        <PitchPosition
          position="rightStriker"
          customClass="attacker"
          selectedPlayer={playerTeam.rightStriker}
          cardPos="RS"
        />
        <PitchPosition
          position="leftStriker"
          customClass="attacker"
          selectedPlayer={playerTeam.leftStriker}
          cardPos="LS"
        />
      </div>
    </>
  );
};

export default PitchPositions;
