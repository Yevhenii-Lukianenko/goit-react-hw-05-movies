import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import defaultMovieImg from '../../images/defaultMovieImg.png';
import {
  List,
  MovieCard,
  DetailLink,
  Image,
  TextContainer,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <MovieCard key={id}>
          <DetailLink to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w400${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
            />
            <TextContainer>
              <MovieTitle>{title}</MovieTitle>
            </TextContainer>
          </DetailLink>
        </MovieCard>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
