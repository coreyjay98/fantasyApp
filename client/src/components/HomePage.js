import PlayerList from './PlayerList';
import FixtureList from './FixtureList';
import useSiteContext from '../hooks/useSiteContext';
import HomeStats from './HomeStats';
import { useState } from 'react';
import FixturePage from './FixturePage';

const HomePage = () => {
  const { username } = useSiteContext();
  const [allTeams, setAllTeams] = useState([]);
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
          <div className="fixturePage">
            <FixturePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
