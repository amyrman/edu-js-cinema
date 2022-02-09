import api from "./movies.js";



export async function getRatings(request) {
  const rates = await api.loadRating(request.params.movieId);
  const title = await api.loadMovie(request.params.movieId);
  let count = 0;
  rates.forEach((a) => count++);

  return {
    title: title.title,
    count: count,
    data: rates.map((rate) => ({
      rating: rate.rating,
    })),
  };
}


