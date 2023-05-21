import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Section } from './Movies.styled';
import { Container } from 'components/Container/Container';
import { SearchMovieForm } from '../../components/SearchMovieForm/SearchMovieForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import API from 'services/api';
const api = new API();

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();

  const handleSubmitForm = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    const fetchMovies = async () => {
      setLoading(true);
      const searchMovies = await api.searchMovies(searchQuery);
      setMovies(searchMovies);
      setLoading(false);
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        {movieId ? (
          <Outlet />
        ) : (
          <div>
            <SearchMovieForm onSubmit={handleSubmitForm} />
            {!isLoading ? <MoviesList movies={movies} /> : <Loader />}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
