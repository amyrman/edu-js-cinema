import express from "express";
import { engine } from "express-handlebars";


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
  response.render('movies');
}) 


app.use('/', express.static('./static'));


app.listen(5080);