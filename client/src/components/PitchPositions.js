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
          selectedPlayer={playerTeam ? playerTeam.goalkeeper : 0}
          cardPos="GK"
        />
      </div>
      <div className="defense">
        <PitchPosition
          position="rightBack"
          customClass="defender"
          selectedPlayer={playerTeam ? playerTeam.rightBack : 0}
          cardPos="RB"
        />
        <PitchPosition
          position="centreBackRight"
          customClass="defender"
          selectedPlayer={playerTeam ? playerTeam.centreBackRight : 0}
          cardPos="CB"
        />
        <PitchPosition
          position="centreBackLeft"
          customClass="defender"
          selectedPlayer={playerTeam ? playerTeam.centreBackLeft : 0}
          cardPos="CB"
        />
        <PitchPosition
          position="leftBack"
          customClass="defender"
          selectedPlayer={playerTeam ? playerTeam.leftBack : 0}
          cardPos="LB"
        />
      </div>
      <div className="midfield">
        <PitchPosition
          position="rightMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam ? playerTeam.rightMidfield : 0}
          cardPos="RM"
        />
        <PitchPosition
          position="centreMidfieldRight"
          customClass="midfielder"
          selectedPlayer={playerTeam ? playerTeam.centreMidfieldRight : 0}
          cardPos="CM"
        />
        <PitchPosition
          position="centreMidfieldLeft"
          customClass="midfielder"
          selectedPlayer={playerTeam ? playerTeam.centreMidfieldLeft : 0}
          cardPos="CM"
        />
        <PitchPosition
          position="leftMidfield"
          customClass="midfielder"
          selectedPlayer={playerTeam ? playerTeam.leftMidfield : 0}
          cardPos="LM"
        />
      </div>
      <div className="attack">
        <PitchPosition
          position="rightStriker"
          customClass="attacker"
          selectedPlayer={playerTeam ? playerTeam.rightStriker : 0}
          cardPos="RS"
        />
        <PitchPosition
          position="leftStriker"
          customClass="attacker"
          selectedPlayer={playerTeam ? playerTeam.leftStriker : 0}
          cardPos="LS"
        />
      </div>
    </>
  );
};

export default PitchPositions;
