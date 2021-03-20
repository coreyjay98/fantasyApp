import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlayerListItem from './PlayerListItem';
import SortingInput from './SortingInput';
import usePlayerContext from '../hooks/usePlayerContext';

const PlayerPageList = () => {
  const { allPlayers } = usePlayerContext();
  return (
    <>
      <div className="playerList">
        <div className="listHeader">
          <List>
            <ListItem>
              <ListItemText primary="Player" />
              <ListItemText primary="Position" />
              <ListItemText>
                <SortingInput allPlayers={allPlayers} />
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className="listHolder">
          <List>
            {allPlayers
              ? allPlayers.map((player) => (
                  <PlayerListItem player={player} key={player._id} />
                ))
              : null}
          </List>
        </div>
      </div>
    </>
  );
};

export default PlayerPageList;

/* {topScorers
    ? topScorers.map((scorer) => (
        <ListItem>
          <ListItemText
            primary={`${scorer.player.firstname} ${scorer.player.lastname} `}
          />
          <ListItemText primary="Goals" />
          <ListItemText primary="Games Played" />
        </ListItem>
      ))
    : null} */
