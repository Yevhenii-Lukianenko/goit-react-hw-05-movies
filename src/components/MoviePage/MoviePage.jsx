import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import defaultMovieImg from '../../images/defaultMovieImg.png';
import { Loader } from 'components/Loader/Loader';
import {
  BackButton,
  MovieCard,
  Image,
  DetailContainer,
  MovieTitle,
  PartTitle,
  Text,
} from './MoviePage.styled';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';
import API from 'services/api';
const api = new API();

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [lastLocation, setlastLocation] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    if (lastLocation.pathname && lastLocation.pathname.includes(movieId)) {
      return;
    }
    return setlastLocation(location);
  }, [location, movieId, lastLocation]);

  const backLinkHref = lastLocation.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const movieById = await api.getMovieDetails(movieId);
      setMovie(movieById);
      setLoading(false);
    };

    fetchMovies();
  }, [movieId]);

  const { genres, poster_path, title, vote_average, overview } = movie;
  const genresList = genres ? genres.map(genre => genre.name) : [];

  return (
    <>
      {!isLoading ? (
        <div>
          <BackButton to={backLinkHref}>Go back</BackButton>

          <MovieCard>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w400${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
            />

            <DetailContainer>
              <MovieTitle>{title}</MovieTitle>
              <Text>{`User score: ${Number(vote_average * 10).toFixed(
                2
              )}%`}</Text>
              <PartTitle>Overview</PartTitle>
              <Text>{overview}</Text>
              {genresList.length > 0 && (
                <>
                  <PartTitle>Genres</PartTitle>
                  <Text>{genresList.join(', ')}</Text>
                </>
              )}
            </DetailContainer>
          </MovieCard>

          <hr></hr>

          <AdditionalInfo />

          <hr></hr>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MoviePage;
