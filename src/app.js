import express, { response } from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie, loadScreenings} from "./movies.js";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";
//import { getScreenings } from "./movieScreenings.js";

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
})

app.get("/api/screenings/", async (request, response) => {
  const screenings = await loadScreenings();
  response.json({
      data: screenings.map(obj => {
        return {
          time: obj.attributes.start_time,
          room: obj.attributes.room,
          movie: {
          id: obj.attributes.movie.data.id
          }
        };
      }),
    })
});

app.use("/", express.static("./static"));

export default app;