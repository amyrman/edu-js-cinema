import express from "express";
import { engine } from "express-handlebars";


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates')


app.get('/', async (request, response) => {
  response.render('index');
})


app.use('/', express.static('./static'));
// app.use('/', express.static('./static/img'));

app.listen(5080);