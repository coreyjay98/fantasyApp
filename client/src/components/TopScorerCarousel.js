import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { scorer } from '../testing/scorer';
import CarouselItem from './CarouselItem';
const TopScorerCarousel = () => {
  const [topScorers, setTopScorers] = useState([]);

  useEffect(() => {
    (async () => {
      /* const res = await fetch(
                `https://v3.football.api-sports.io/players/topscorers?season=2020&league=39`,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host': 'v3.football.api-sports.io',
                    'x-rapidapi-key': process.env.REACT_APP_APIKEY,
                  },
                }
              );
              const response = await res.json(); */
      await setTopScorers(scorer);
    })();
  }, []);
  return (
    <>
      <h1 style={{ marginLeft: '10px' }}>Top Scorers</h1>
      <div className="carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          width="85%"
          interval={5000}
          infiniteLoop={true}
        >
          {topScorers.map((player) => (
            <CarouselItem player={player} key={player.player.name} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default TopScorerCarousel;
