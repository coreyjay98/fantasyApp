import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ItemTypes } from '../dnd/Constants';
import { useDrag } from 'react-dnd';
import usePlayerContext from '../hooks/usePlayerContext';

const PlayerListItem = ({ player }) => {
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
    },
  }));

  const listItemClicked = () => {
    console.log(player);
    setSelectedPlayer(player);
  };

  return (
    <ListItem
      key={player._id}
      ref={drag}
      onClick={listItemClicked}
      className="playerListItem"
    >
      <ListItemText primary={`${player.lastName}`} />
      <ListItemText primary={player.position} className="middleEntry" />
      <ListItemText>
        <div
          style={{
            backgroundImage: `url(${player.team.teamLogo})`,
          }}
          className="teamImage"
          data-team={player.team.teamName}
        ></div>
      </ListItemText>
    </ListItem>
  );
};
export default PlayerListItem;
