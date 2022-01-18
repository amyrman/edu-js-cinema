import express from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie } from "./static/src/movies.js"


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates')


app.get('/', async (request, response) => {
  response.render('index');
})
app.get('/index', async (request, reponse) => {
  reponse.render('index');
});

app.get('/movies', async (request, response) => {
  const movies = await loadAllMovies();
  response.render('allMovies', { movies });
}) 

app.get('/movies/:Id', async (request, response) => {
  const movie = await loadMovie(request.params.Id);
  response.render('movie', { movie });
})

app.use('/', express.static('./static'));

app.listen(5080);