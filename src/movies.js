import fetch from 'node-fetch';

const API = 'https://lernia-kino-cms.herokuapp.com/api/movies';

const loadAllMovies = async () => {
  const movies = await fetch(API);
  const data = await movies.json();
  return data.data;
}

const loadMovie = async (id) => {
  const movie = await fetch(`${API}/${id}`);
  const data = await movie.json();
  return data.data;
}

export { loadAllMovies, loadMovie } 