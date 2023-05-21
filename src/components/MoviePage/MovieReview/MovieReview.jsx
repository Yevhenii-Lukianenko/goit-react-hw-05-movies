import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewCard, Author, Content } from './MovieReview.styled';
import API from 'services/api';
const api = new API();

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewByMovieId = await api.getMovieReviews(movieId);
      setReviews(reviewByMovieId);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ReviewList>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <ReviewCard key={review.id}>
                <Author>{`Author: ${review.author}`}</Author>
                <Content>{review.content}</Content>
              </ReviewCard>
            );
          })
        : 'We don`t have any reviews for this movie'}
    </ReviewList>
  );
};

export default MovieReview;
