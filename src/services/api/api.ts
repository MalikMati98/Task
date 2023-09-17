import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dffba9561ac155546bdd3246e565be42';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.data.message || 'Something went wrong!');
  }
};

const handleError = (error: any) => {
  throw error;
};

export const Get = async (url: string, params = {api_key: API_KEY}) => {
  try {
    const response = await axiosInstance.get(url, {params});
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Post = async (url: string, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Put = async (url: string, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const Delete = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.delete(url, {params});
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
