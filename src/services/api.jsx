import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class API {
  constructor() {
    this.apiKey = 'c4665b1bb83f92274dd3017d4b062627';
  }

  async getTrendingMovies() {
    try {
      const response = await axios.get('/trending/movie/week', {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data.results;
    } catch (error) {
      Notify.failure(`Error getting trending movies: ${error}`);
      throw error;
    }
  }

  async searchMovies(query) {
    try {
      const response = await axios.get('/search/movie', {
        params: {
          api_key: this.apiKey,
          query: query,
        },
      });
      return response.data.results;
    } catch (error) {
      Notify.failure(`Error searching movies: ${error}`);
      throw error;
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`/movie/${movieId}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      Notify.failure(`Error getting movie: ${error}`);
      throw error;
    }
  }

  async getMovieCast(movieId) {
    try {
      const response = await axios.get(`/movie/${movieId}/credits`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      Notify.failure(`Error getting movie cast: ${error}`);
      throw error;
    }
  }

  async getMovieReviews(movieId) {
    try {
      const response = await axios.get(`/movie/${movieId}/reviews`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data.results;
    } catch (error) {
      Notify.failure(`Error getting movie review: ${error}`);
      throw error;
    }
  }
}

export default API;
