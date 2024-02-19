const API_KEY = '177269945e48f57f144fce22779a7dd9';
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&language=eng&page=1`,
  fetchPlayknow: `/movie/now_playing?api_key=${API_KEY}&language=eng&page=44`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`
};
export default requests;
