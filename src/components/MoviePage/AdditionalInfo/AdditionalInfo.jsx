import { useParams } from 'react-router-dom';
import {
  AddInfoContainer,
  PartTitle,
  LinkList,
  LinkItem,
  MoreInfoLink,
} from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  const { movieId } = useParams();

  return (
    <AddInfoContainer>
      <PartTitle>Additional information</PartTitle>
      <LinkList>
        <LinkItem>
          <MoreInfoLink to={`/movies/${movieId}/cast`}>Cast</MoreInfoLink>
        </LinkItem>
        <LinkItem>
          <MoreInfoLink to={`/movies/${movieId}/reviews`}>Reviews</MoreInfoLink>
        </LinkItem>
      </LinkList>
    </AddInfoContainer>
  );
};
