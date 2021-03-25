import LeagueTable from './LeagueTable';
import TopScorerCarousel from './TopScorerCarousel';

const HomeStats = () => {
  return (
    <div className="homeLeftDisplay">
      <div className="topScorers">
        <TopScorerCarousel />
      </div>
      <div className="leagueTable">
        <LeagueTable />
      </div>
    </div>
  );
};

export default HomeStats;
