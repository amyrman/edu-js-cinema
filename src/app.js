import express from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie, loadScreenings} from "./movies.js";
import { kino } from "./kinoBuilds.js";
import { marked } from "marked";
import {getScreenings} from "./movieScreenings.js";

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

 app.get("/api/screenings/:id", async (request, response) => { 
      const screenings = await getScreenings(request.params.id);
      getScreenings
      ? response.status(200).json(screenings)
      : response.status(404).render("404",{ kino });
  });
   
app.use("/", express.static("./static"));

export default app;