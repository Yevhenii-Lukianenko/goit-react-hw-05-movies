import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultUserImg from '../../../images/userDefaultImg.png';
import {
  ActorList,
  ActorCard,
  Photo,
  Name,
  CharacterName,
} from './MovieCast.styled';
import API from 'services/api';
const api = new API();

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const castByMovieId = await api.getMovieCast(movieId);
      setCast(castByMovieId.cast);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ActorList>
      {cast.map(actor => {
        return (
          <ActorCard key={actor.name}>
            <Photo
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w400${actor.profile_path}`
                  : defaultUserImg
              }
              alt={actor.name}
            />
            <Name>{actor.name}</Name>
            {actor.character && (
              <CharacterName>{`Character: ${actor.character}`}</CharacterName>
            )}
          </ActorCard>
        );
      })}
    </ActorList>
  );
};

export default MovieCast;
