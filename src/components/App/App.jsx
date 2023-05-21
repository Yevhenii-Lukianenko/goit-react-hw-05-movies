import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../Header/Header';

const TrendingMovies = lazy(() => import('../../pages/home/Home'));
const Movies = lazy(() => import('../../pages/movies/Movies'));
const MoviePage = lazy(() => import('../MoviePage/MoviePage'));
const MovieReview = lazy(() => import('../MoviePage/MovieReview/MovieReview'));
const MovieCast = lazy(() => import('../MoviePage/MovieCast/MovieCast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrendingMovies />} />

          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MoviePage />}>
              <Route path="reviews" element={<MovieReview />} />
              <Route path="cast" element={<MovieCast />} />
            </Route>
          </Route>

          <Route path="*" element={<TrendingMovies />} />
        </Route>
      </Routes>
    </>
  );
};
