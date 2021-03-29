import usePlayerContext from '../../../hooks/usePlayerContext';
import { useDrop } from 'react-dnd';
import { FaTrash } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';
import { GiSoccerBall, GiSoccerKick } from 'react-icons/gi';
import PositionFetch from './PositionFetch';

const PitchPosition = ({ position, customClass, selectedPlayer, cardPos }) => {
  const { addNewPlayer, playerDrop } = usePlayerContext();
  // eslint-disable-next-line
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: ({ player }) => ({
      player,
      data: 'card',
      position,
    }),
    // props to collect
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const deleteSelection = () => {
    addNewPlayer(position, 0);
  };

  return (
    <>
      {playerDrop ? (
        <PositionFetch customClass="customClass" />
      ) : (
        <div
          className={`${customClass} ${
            selectedPlayer === 0 || selectedPlayer === undefined
              ? 'emptyCard'
              : 'card'
          }`}
          ref={drop}
          data="one"
          style={{
            border: isOver ? '2px solid red' : null,
          }}
        >
          {selectedPlayer === 0 || selectedPlayer === undefined ? (
            <div className="plusSign">
              <IoAddCircleOutline />
            </div>
          ) : (
            <>
              <div className="cardBody">
                <div className="playerLeft">
                  <span className="position">{cardPos}</span>
                  <div
                    className="playerLogo"
                    style={{
                      backgroundImage: `url(${selectedPlayer.team.teamLogo})`,
                    }}
                  ></div>
                  <div className="statDiv">
                    <span>
                      {selectedPlayer.games.goals || 0}
                      <GiSoccerBall />
                    </span>
                    <span>
                      {selectedPlayer.games.assists || 0} <GiSoccerKick />
                    </span>
                  </div>
                  <div className="delete" onClick={deleteSelection}>
                    <FaTrash />
                  </div>
                </div>
                <div className="playerRight">
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${selectedPlayer.photo})` }}
                  ></div>
                </div>
              </div>
              <span className="name">
                <p>{selectedPlayer.lastName}</p>
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PitchPosition;
