const apiKey = import.meta.env.VITE_OPENDB_KEY

export const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

export const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

export const NOW_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

export const TOP_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

export const DETAILS_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
