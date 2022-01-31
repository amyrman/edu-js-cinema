import express from "express";
import { engine } from "express-handlebars";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";
import api from "./movies.js";
import { getScreenings } from "./screenings.js";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");


app.get("/", async (request, response) => {
  response.render("index", { kino });
});
app.get("/index", async (request, response) => {
  response.render("index", { kino });
});

app.get("/movies", async (request, response) => {
  const movies = await api.loadAllMovies();
  response.render("allMovies", {movies, kino});
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await api.loadMovie(request.params.movieId);
  const reviews = await api.loadReviews(request.params.movieId);
  movie
    ? response.render("movie", { movie, reviews, kino })
    : response.status(404).render("404", { kino });
});


app.get("/api/screenings", async (request, response) => {
  response.json(await getScreenings(api));
});

app.get("/api/movies/:movieId/reviews", async (request, response) => {
  const reviews = await api.loadReviews(request.params.movieId);
  response.json({
    data: reviews.map(review => ({
      name: review.author,
      comment: review.comment,
      rating: review.rating,
    })),
  });
});

app.use("/", express.static("./static"));

export default app;