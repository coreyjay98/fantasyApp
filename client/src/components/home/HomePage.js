import useSiteContext from '../../hooks/useSiteContext';
import HomeStats from './HomeStats';
import FixturePage from './FixturePage';

const HomePage = () => {
  const { username } = useSiteContext();
  return (
    <div className="background">
      <div className="page homePage">
        <div className="title">
          <h1>
            Welcome to Fantasy Futball {username}, create your team in the
            'team' page!
          </h1>
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
