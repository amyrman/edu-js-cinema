import express from "express";
import { engine } from "express-handlebars";
import { loadAllMovies, loadMovie } from "./static/src/movies.js"


const app = express();

const menu = [
  {
    label: "Filmer",
    link: "/movies",
  },
  {
    label: "Kontakt",
    link: "",
  },
  {
    label: "Biljetter",
    link: "",
  },
  {
    label: "Om oss",
    link: "",
  },
  {
    label: "Events",
    link: "",
  },
];

const footerAdress = 'Kino på mars, Marsgatan 1337 ,42 121 31 MUSK HQ';
const footerSocial = [
  {
    label: "Instagram",
    class: "fab fa-instagram",
    link: "",
  },
  {
    label: "Facebook",
    class: "fab fa-facebook",
    link: "",
  },
  {
    label: "Twitter",
    class: "fab fa-twitter-square",
    link: "",
  },
  {
    label: "Youtube",
    class: "fab fa-youtube",
    link: "",
  },
]

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates')


app.get('/', async (request, response) => {
  response.render('index', { menu, footerAdress, footerSocial });
})
app.get('/index', async (request, response) => {
  response.render('index', { menu, footerAdress, footerSocial });
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