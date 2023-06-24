import { api } from "./httpService";

const searchTours = async (destination, dates, duration, filters) => {
  try {
    const response = await api.get("/tours", {
      params: {
        destination,
        dates,
        duration,
        filters,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getTourById = async (tourId) => {
  try {
    const response = await api.get(`/tours/${tourId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createTour = async (tourData) => {
  try {
    const response = await api.post("/tours", tourData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateTourById = async (tourId, updatedTourData) => {
  try {
    const response = await api.put(`/tours/${tourId}`, updatedTourData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteTourById = async (tourId) => {
  try {
    const response = await api.delete(`/tours/${tourId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const searchService = {
  searchTours,
  getTourById,
  createTour,
  updateTourById,
  deleteTourById,
};

export default searchService;
