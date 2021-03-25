const CarouselItem = ({ player }) => {
  const averageGoals = (goals, games) => {
    const str = goals / games;
    return Math.round(str * 100) / 100;
  };
  return (
    <div className="carouselContent">
      <div className="carouselLeft">
        <div
          className="image"
          style={{
            backgroundImage: `url(${player.player.photo})`,
          }}
        ></div>
      </div>
      <div className="carouselRight">
        <div className="name">
          <h1>{player.player.name}</h1>
          <div className="logoHolder">
            <div
              className="teamLogo"
              style={{
                backgroundImage: `url(${player.statistics[0].team.logo})`,
              }}
            ></div>
          </div>
        </div>
        <div className="stats">
          <div className="leftStats">
            <h2>Goals - {player.statistics[0].goals.total}</h2>
            <h2>Assists - {player.statistics[0].goals.assists}</h2>
            <h2>Apps - {player.statistics[0].games.appearences}</h2>
          </div>
          <div className="rightStats">
            <h2>
              Avg -{' '}
              {averageGoals(
                player.statistics[0].goals.total,
                player.statistics[0].games.appearences
              )}
            </h2>
            <h2>Shots - {player.statistics[0].shots.total}</h2>
            <h2>Cards - {player.statistics[0].cards.yellow}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
