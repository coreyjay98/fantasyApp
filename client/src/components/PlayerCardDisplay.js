import usePlayerContext from '../hooks/usePlayerContext';
import { ItemTypes } from '../dnd/Constants';
import { useDrag } from 'react-dnd';
import { FaTrash } from 'react-icons/fa';

const PlayerCardDisplay = ({ player }) => {
  const {
    addNewPlayer,
    removePlayerFromAll,
    setSelectedPlayer,
  } = usePlayerContext();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: {
      player,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const droppedOn = monitor.getDropResult();
      if (droppedOn === null) return;
      addNewPlayer(droppedOn.position, item.player);
      removePlayerFromAll(item.player);
      removeSelection();
    },
  }));

  const removeSelection = () => {
    setSelectedPlayer({});
  };

  return (
    <div className="playerCardDisplay">
      <div className="playerCard" ref={drag}>
        <div className="name">
          <h2>
            {player.firstName} {player.lastName}
          </h2>
          <div
            style={{
              backgroundImage: `url(${player.team.teamLogo})`,
            }}
            className="titleImage"
          ></div>
          <div className="delete titleDelete" onClick={removeSelection}>
            <FaTrash />
          </div>
        </div>
        <div className="flex">
          <div className="statDiv">
            <div className="left">
              <h3>Goals: {player.games.goals}</h3>
              <h3>Assists: {player.games.assists || 0}</h3>
              <h3>Apps: {player.games.appearances}</h3>
            </div>
            <div className="right">
              <h3>Cards: {player.games.cards}</h3>
              <h3>Avg Rating: </h3>
              <h3>Nation: {player.nationality}</h3>
            </div>
          </div>
          <div className="pictureDiv">
            <div
              style={{
                backgroundImage: `url(${player.photo})`,
              }}
              className="image"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardDisplay;
