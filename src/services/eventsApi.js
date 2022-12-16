import axios from "axios";

const KEY = '5c79cb68282b6d2568848c7dc97d0ef0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchEvents() {
    const response = await axios('events', {
        params: {
            apikey: KEY,
            size: 20
        }
    })
    return response.data._embedded.events
}