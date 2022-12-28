
import { useEffect, useState } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Text } from './HomePage.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchEvents().then(setMovies);
  }, []);
  return (
    movies && (
      <>
        <Text>Popular Movies Today</Text>
        <MoviesList movies={movies} />
      </>
    )
  );
};

export default HomePage;
