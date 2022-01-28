import express from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie } from "./movies.js";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";
import { getUpcomingScreenings } from './screenings.js'

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
    : response.status(404).render("404", { kino });
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

app.use("/", express.static("./static"));

export default app;