import axios from 'axios';

export const searchTours = async (searchParams) => {
  try {
    const response = await axios.get('/api/tours', {
      params: searchParams,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
