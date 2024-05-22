import axios from 'axios';

const API_BASE_URL = '/api';

export const getMovieById = async (movieId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data by ID:', error);
    throw error;
  }
};

export const getMovies = async (page: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};



export const getGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/movie/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres data:', error);
    throw error;
  }
};

interface Filters {
  genre?: string;
  year?: string;
  ratingFrom?: number;
  ratingTo?: number;
}

interface Movie {
  id: number;
  title: string;
}

interface GetMoviesResponse {
  results: Movie[];
}

export const getMoviesWithCategory = async (page: number, filters: Filters = {}): Promise<GetMoviesResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/discover/movie`, {
      params: {
        api_key: '2e4ae5c75cd2edc8a208bd921ff797fa',
        page: page,
        with_genres: filters.genre,
        primary_release_year: filters.year,
        'vote_average.gte': filters.ratingFrom,
        'vote_average.lte': filters.ratingTo,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};