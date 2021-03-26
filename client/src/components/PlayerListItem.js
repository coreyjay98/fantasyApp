import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ItemTypes } from '../dnd/Constants';
import { useDrag } from 'react-dnd';
import usePlayerContext from '../hooks/usePlayerContext';
import { useState } from 'react';
import { GiSoccerBall, GiSoccerKick } from 'react-icons/gi';

const PlayerListItem = ({ player }) => {
  const { addNewPlayer, setSelectedPlayer, setPlayerDrop } = usePlayerContext();
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
    },
  }));

  const listItemClicked = () => {
    console.log(player);
    setSelectedPlayer(player);
  };

  return (
    <ListItem key={player._id} ref={drag} className="playerListItem">
      <ListItemText primary={`${player.lastName}`} />
      <ListItemText primary={player.position} className="middleEntry" />
      <ListItemText className="lastEntry">
        <GiSoccerBall />
        {player.games.goals || 0}
      </ListItemText>
      <ListItemText className="lastEntry">
        <GiSoccerKick />
        {player.games.assists || 0}
      </ListItemText>
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
