import express from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie } from "./static/src/movies.js";
import { kino } from "./static/src/kinoBuilds.js";
import { marked } from "marked";

const app = express();

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
  const movies = await loadAllMovies();
  response.render("allMovies", {movies, kino});
});

app.get("/movies/:Id", async (request, response) => {
  const movie = await loadMovie(request.params.Id);
  movie
    ? response.render("movie", { movie, kino })
    : response.status(404); response.render("404", { kino });
});

app.use("/", express.static("./static"));

app.listen(5080);
