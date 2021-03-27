import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const TableItem = ({ team }) => {
  return (
    <ListItem>
      <ListItemText primary={team.rank} />
      <ListItemText primary={team.team.name} />
      <ListItemText primary={team.all.win} />
      <ListItemText primary={team.all.draw} />
      <ListItemText primary={team.all.lose} />
      <ListItemText primary={team.all.played} />
      <ListItemText primary={team.points} />
      <ListItemAvatar>
        <Avatar src={team.team.logo} />
      </ListItemAvatar>
    </ListItem>
  );
};
export default TableItem;
