import { useEffect, useState } from 'react';
import { arr } from '../testing/obj';
import FixtureList from './FixtureList';

const FixturePage = () => {
  const [fixtures, _setFixtures] = useState([]);
  const [fetchFixtures, setFetchFixtures] = useState(false);

  useEffect(() => {
    (async () => {
      setFetchFixtures(true);
      const res = await fetch(
        `https://v3.football.api-sports.io/fixtures/?season=2020&league=39&from=${getDate(
          'today'
        )}&to=${getDate('future')}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': process.env.REACT_APP_APIKEY,
          },
        }
      );
      const response = await res.json();
      await _setFixtures(response.response);
      setFetchFixtures(false);
    })();
  }, []);

  const getDate = (action) => {
    const today = Date.now();
    const t = new Date(action === 'today' ? today : today + 864000000);
    return t.toISOString().slice(0, 10);
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Upcoming fixtures</h1>
      </div>
      <div className="fixtureList">
        {fetchFixtures ? (
          <div>
            <h1>Fetching Fixtures...</h1>
          </div>
        ) : (
          fixtures.map((fixture) => (
            <FixtureList fixture={fixture} key={fixture.fixture.id} />
          ))
        )}
      </div>
    </>
  );
};
export default FixturePage;
