import express from "express";
import fetch from "node-fetch";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie } from "./movies.js";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";

const app = express();

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.use(express.json());

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
    : response.status(404).render("404", { kino });
});

app.post('/movies/:id/reviews', async (request, response) => {
  response.status(200);
  console.log(request.body);
  
  await fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
    method: 'POST',
    mode: 'cors',
    credential: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.body)
  })

})

app.use("/static", express.static("./static"));

export default app;