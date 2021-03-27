const FixtureList = ({ fixture }) => {
  const dateParse = (date, action) => {
    const unix = new Date(Date.parse(date));
    return action === 'time'
      ? unix.toUTCString().slice(18)
      : unix.toDateString();
  };

  return (
    <div className="fixtureItem">
      <div className="left fixtureTeam">
        <div
          className="logo"
          style={{
            backgroundImage: `url(
              ${fixture.teams.home.logo}
            )`,
          }}
        ></div>
        <div className="teamContent">
          <h2 className="title">{fixture.teams.home.name}</h2>
        </div>
      </div>
      <div className="center">
        <div className="versus">
          <h2>V</h2>
        </div>
        <div className="matchInfo">
          <div className="info">
            <h2>{dateParse(fixture.fixture.date, 'time')}</h2>
            <h2>{dateParse(fixture.fixture.date, 'date')}</h2>
            <h2>{fixture.fixture.venue.name}</h2>
          </div>
        </div>
      </div>
      <div className="fixtureTeam">
        <div className="teamContent">
          <h2 className="title">{fixture.teams.away.name}</h2>
        </div>
        <div
          className="logo"
          style={{
            backgroundImage: `url(
              ${fixture.teams.away.logo}
              )`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FixtureList;
