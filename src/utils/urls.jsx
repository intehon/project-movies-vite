import apiKey from './apiKey'

export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

export const DETAILS_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
