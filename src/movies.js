import fetch from "node-fetch";

const API = "https://lernia-kino-cms.herokuapp.com/api/movies";
const API_BASE = "https://lernia-kino-cms.herokuapp.com/api";

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

export async function loadReviews(movieId) {
  const res = await fetch(API_BASE + "/reviews?filters[movie]=" + movieId);
  const payload = await res.json();
  return payload.data.map(simplifyObject);
}



export default {
  loadReviews: loadReviews,
  loadAllMovies: loadAllMovies,
  loadMovie: loadMovie,
};
