import express from "express";
import fs from "fs/promises";


const app = express();


app.get('/', async (request, response) => {
  const fileBuf = await fs.readFile('./index.html');
  response.type('html');
  response.send(fileBuf);
})


app.get('/*', async (request, response) => {
  try {
    const fileName = request.path;
    const fileBuf = await fs.readFile(`./${fileName}`);
    const type = fileName.split('.')[1];
    response.type(type);
    response.send(fileBuf);
  }
  catch (err) {
    response.status(404).end();
  }
});

// app.use(express.static('./'));

app.listen(5080);