import app from "../static/src/app.js";
import request from "supertest";


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
});


test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/movies')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
  expect(response.text.includes('Godfather')).toBeTruthy();
});

test('movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movies/1')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});