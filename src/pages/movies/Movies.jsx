import { useState, useEffect } from 'react';
import { useParams, Outlet, useSearchParams } from 'react-router-dom';
import { Section } from './Movies.styled';
import { Container } from 'components/Container/Container';
import { SearchMovieForm } from '../../components/SearchMovieForm/SearchMovieForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import API from 'services/api';
const api = new API();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();

  const handleSubmitForm = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const searchMovies = await api.searchMovies(query);
      setMovies(searchMovies);
      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  return (
    <Section>
      <Container>
        {movieId ? (
          <Outlet />
        ) : (
          <div>
            <SearchMovieForm onSubmit={handleSubmitForm} query={query} />
            {!isLoading ? <MoviesList movies={movies} /> : <Loader />}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
