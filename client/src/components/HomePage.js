import PlayerList from './PlayerList';
import FixtureList from './FixtureList';
import useSiteContext from '../hooks/useSiteContext';
import HomeStats from './HomeStats';

const HomePage = () => {
  const { username } = useSiteContext();
  return (
    <div className="background">
      <div className="page homePage">
        <div className="title">
          <h1>Welcome {username}!</h1>
        </div>
        <div className="homeContent">
          <div className="homeLeft">
            <HomeStats />
          </div>
          <div className="playerList">
            <PlayerList />
            <FixtureList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
