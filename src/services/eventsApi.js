import axios from "axios";

const KEY = '5c79cb68282b6d2568848c7dc97d0ef0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchEvents() {
    const response = await axios('trending/movie/day', {
      params: {
        api_key: KEY,
        size: 20,
      },
    });
    return response.data.results
}

export async function fetchEventById(id) {
  const {data} = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
      
    },
  });
  return data
}