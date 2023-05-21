import { useState, useEffect } from 'react';
import { Section } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import API from 'services/api';
const api = new API();

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const movies = await api.getTrendingMovies();
      setMovies(movies);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <Section>
      <Container>
        {!isLoading ? <MoviesList movies={movies} /> : <Loader />}
      </Container>
    </Section>
  );
};

export default TrendingMovies;
