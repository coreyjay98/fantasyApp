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
                    'x-rapidapi-key': '6fb6f22c9a62ade9d584fad2f0cc68df',
                  },
                }
              );
              const response = await res.json(); */
      await setTopScorers(scorer);
    })();
  }, []);
  return (
    <>
      <h1>Top Scorers</h1>
      <div className="carousel">
        <Carousel showThumbs={false}>
          {topScorers.map((player) => (
            <CarouselItem player={player} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default TopScorerCarousel;
