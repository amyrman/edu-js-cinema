import express from "express";
import { engine } from "express-handlebars";
import {  loadMovie} from "./movies.js";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";
import {getScreenings} from "./movieScreenings.js";
import api from "./movies.js";
import { getRatings } from "./rates.js";
import { loadReviews } from "./loadReviews.js"
import { getUpcomingScreenings } from './screenings.js'



const functionA = (screenings) => {
  const screening = screenings.filter(obj => {
    const screeningTime = new Date(obj.attributes.start_time);
    return screeningTime > now; 
  })
  .slice(0, 10);
  console.log(screening);
  return [];
}







const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  engine({
    helpers: {
      markdown: (md) => marked(md),
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
  response.render("index", { kino });
});
// app.get("/index", async (request, response) => {
//   response.render("index", { kino });
// });

app.get("/movies", async (request, response) => {
  const movies = await api.loadAllMovies();
  response.render("allMovies", { movies, kino });
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await api.loadMovie(request.params.movieId);
  movie
  ? response.render("movie", { movie, kino })
  : response.status(404).render("404", { kino });

});


// app.get("/movies/:Id", async (request, response) => {  
//   const movie = await loadMovie(request.params.Id);
//   movie
//     ? response.render("movie", { movie, kino })
//     : response.status(404).render("404", { kino });
// })

 app.get("/api/screenings/:id", async (request, response) => { 
      const screenings = await getScreenings(request.params.id);
      getScreenings
      ? response.status(200).json(screenings)
      : response.status(404).render("404",{ kino });
  });
   



app.get("/api/movies/:movieId/rating", async (request, response) => {
  response.json(await getRatings(request));
});

app.get('/api/screenings', async (request, response) => {
  try {
    const screeningsData = await getUpcomingScreenings();
    const jsonObj = {
      data: screeningsData
    }
    const jsonData = JSON.stringify(jsonObj)
    response.json(JSON.parse(jsonData));
  } catch (error) {
    console.log(error)
  }
});


app.get("/api/movies/:id/reviews", async (request, response) => {
  const movie = await loadMovie(request.params.id);
  if (!movie) {
    response.status(404).end();
  } else {
  const reviews = await loadReviews(request.params.id);
  response.json({
    data: reviews.map(review => ({
      comment: review.attributes.comment,
      author: review.attributes.author,
      rating: review.attributes.rating,
    })),
  })};
});

app.use("/", express.static("./static"));

export default app;
