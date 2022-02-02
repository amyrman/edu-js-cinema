import fetch from 'node-fetch';

const API = 'https://lernia-kino-cms.herokuapp.com/api/movies';
const APIBASE = 'https://lernia-kino-cms.herokuapp.com/api';


function simplifyMovieObject(movie) {
  console.log(movie.id)
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


export async function loadScreenings (id){
  const data = await fetch(`${APIBASE}/screenings?filters[movie]=${id}`)
  .then(respons => respons.json()); 
  return data.data;
}



export default{
  loadScreenings: loadScreenings,
}

export {loadAllMovies, loadMovie} 