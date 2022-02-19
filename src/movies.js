import fetch from "node-fetch";
const API = 'https://lernia-kino-cms.herokuapp.com/api/movies';
const APIBASE = 'https://lernia-kino-cms.herokuapp.com/api';


function simplifyMovieObject(movie) {
  console.log(movie.id)
  return {
    id: movie.id,
    ...movie.attributes,
  };
}


function simplifyObject(obj) {
  return {
    id: obj.id,
    ...obj.attributes,
  };
}

export async function loadAllMovies() {
  const movies = await fetch(API);
  const payload = await movies.json();
  return payload.data.map(simplifyObject);
}

export async function loadMovie(id) {
  const movie = await fetch(`${API}/${id}`);
  const payload = await movie.json();
  return simplifyObject(payload.data);
}

export async function loadRating(movieId) {
  const res = await fetch(APIBASE + "/reviews?filters[movie]=" + movieId);
  const payload = await res.json();

  return payload.data.map(simplifyObject);
}


export async function loadScreenings (id){
  const data = await fetch(`${APIBASE}/screenings?filters[movie]=${id}`)
  .then(respons => respons.json()); 


  return data.data;
}



export default {
  loadRating: loadRating,
  loadAllMovies: loadAllMovies,
  loadMovie: loadMovie,
  loadScreenings: loadScreenings,
};

