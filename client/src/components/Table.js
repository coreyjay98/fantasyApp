import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TableItem from './TableItem';
import { useState, useEffect } from 'react';
import { standings } from '../testing/standings';

const Table = () => {
  const [leagueTable, setLeagueTable] = useState([]);

  useEffect(() => {
    (async () => {
      /* const scorerFetch = await fetch(
        'https://v3.football.api-sports.io/standings?league=39&season=2020',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '6fb6f22c9a62ade9d584fad2f0cc68df',
          },
        }
      );
      const response = await scorerFetch.json();
      setTopScorers(response.response); */
      setLeagueTable(standings);
    })();
  }, []);

  return (
    <div className="table">
      <div className="listHeader">
        <List>
          <ListItem>
            <ListItemText primary="Team" />
            <ListItemText primary="W" />
            <ListItemText primary="D" />
            <ListItemText primary="L" />
            <ListItemText primary="GP" />
            <ListItemText primary="P" />
            <ListItemAvatar></ListItemAvatar>
          </ListItem>
        </List>
      </div>
      <div className="listHolder">
        {leagueTable.map((team) => (
          <TableItem team={team} />
        ))}
      </div>
    </div>
  );
};
export default Table;
