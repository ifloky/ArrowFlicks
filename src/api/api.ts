import axios from 'axios';

const API_BASE_URL = '/api';

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