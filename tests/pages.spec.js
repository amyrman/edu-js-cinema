import app from "../static/src/app.js";
import request from "supertest";

import { loadAllMovies, loadMovie } from "../static/src/movies.js";


test('Test if main page is loading', async () => {
  const response = await request(app)
    .get('/')
    .expect(200);

  expect(response.text).toBeTruthy();
});

test('Test if /index is working too', async () => {
  const response = await request(app)
    .get('/index')
    .expect(200);

  expect(response).toBeTruthy();
});

test('Test if not existing page is acessed', async () => {
  const response = await request(app)
    .get('/foo')
    .expect(404);

  expect(response).toBeTruthy();
});

test('Test if not existing movie page is acessed', async () => {
  const response = await request(app)
    .get('/movies/khgjhg')
    .expect(404);

  expect(response).toBeTruthy();
  expect(response.text.includes('404')).toBeTruthy();
});


test('All movies page shows list of movies', async () => {
  const response = await request(app)
    .get('/movies')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
  expect(response.text.includes('Godfather')).toBeTruthy();
});

test('Movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movies/1')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});

// Check if title is correct for all movies
const movies = await loadAllMovies();
for(let i = 0; i < movies.length; i++) {
  const movieId = movies[i].id;
  const movieTitle = movies[i].attributes.title;

  test(`Movie page nr ${movieId} has corret title`, async () => {
    const response = await request(app)
      .get(`/movies/${movieId}`)
      .expect(200);
    
    expect(response.text.includes(`<h1>${movieTitle}`)).toBeTruthy();
  });
};