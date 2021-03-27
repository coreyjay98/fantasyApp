import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PlayerList = () => {
  /*   const [topScorers, setTopScorers] = useState([]); */

  /* useEffect(() => {
    (async () => {
      const scorerFetch = await fetch(
        'https://v3.football.api-sports.io/players/topscorers?season=2020&league=39',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': process.env.REACT_APP_APIKEY,
          },
        }
      );
      const response = await scorerFetch.json();
      setTopScorers(response.response);
    })();
  }); */
  return (
    <div className="list">
      <div className="listHeader">
        <List>
          <ListItem>
            <ListItemText primary="Top Scorers" />
            <ListItemText primary="Goals" />
            <ListItemText primary="Games Played" />
          </ListItem>
        </List>
      </div>
      {/* <div className="listHolder">
        <List>
          {topScorers
            ? topScorers.map((scorer) => (
                <ListItem>
                  <ListItemText
                    primary={`${scorer.player.firstname} ${scorer.player.lastname} `}
                  />
                  <ListItemText primary="Goals" />
                  <ListItemText primary="Games Played" />
                </ListItem>
              ))
            : null}
        </List>
      </div> */}
      <div className="listHolder">
        <List>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Harry Kane" />
            <ListItemText primary="20 Goals" />
            <ListItemText primary="20 Games" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default PlayerList;
