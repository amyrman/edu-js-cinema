import fetch from 'node-fetch';

const API = 'https://lernia-kino-cms.herokuapp.com/api/movies';
const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

function simplifyCmsObject(obj) {
  return {
    id: obj.id,
    ...obj.attributes,
  };
}

export async function loadAllMovies() {
  const movies = await fetch(API);
  const data = await movies.json();
  return data.data.map(simplifyCmsObject);
}

export async function loadMovie(id){
  const movie = await fetch(`${API}/${id}`);
  const data = await movie.json();
  return simplifyCmsObject(data.data);
}

export async function loadReviews(movieId) {
  const res = await fetch(API_BASE + '/reviews?filters[movie]=' + movieId);
  const payload = await res.json();
  return payload.data.map(simplifyCmsObject);
}

export async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie&pagination[pageSize]=1000');
  const payload = await res.json();
  return payload.data;
}




export default{
  loadScreenings:loadScreenings,
  loadReviews:loadReviews,
  loadAllMovies:loadAllMovies,
  loadMovie:loadMovie,
}

