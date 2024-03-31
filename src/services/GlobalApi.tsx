import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";
const api_key = "325eb870257c0010c85bbc022fa5512c";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrendingVideos, getMovieByGenreId };
