import fetch from 'node-fetch';

const API = 'https://lernia-kino-cms.herokuapp.com/api/movies';
const APIBASE = 'https://lernia-kino-cms.herokuapp.com/api';


function simplifyMovieObject(movie) {
  return {
    id: movie.id,
    ...movie.attributes,
  };
}

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


export async function loadScreenings (){
  const response = await fetch(APIBASE + "/screenings?populate=movie&pagination[pageSize]=1000");
  const data = await response.json();
  return data.data;
}

export {loadAllMovies, loadMovie} 