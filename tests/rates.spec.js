import { getRatings } from "../src/rates.js";
import fetch from "node-fetch";
// import api from "../src/movies.js";
import { jest } from "@jest/globals";
import app from "../src/app.js";

jest.setTimeout(10000000);

test("Check if there is more than 5 or equal reviews for the movie", async () => {
  const request = {
    params: {
      movieId: 1,
    },
  };
  const payload = await getRatings(request);

  expect(payload.data.length).toBeGreaterThan(5);
});

test("If there is more or equal to five rewies, calculate average for them ", async () => {
  const request = {
    params: {
      movieId: 1,
    },
  };
  let handlingArray = [];
  const payloadRatings = await getRatings(request).then(
    (payload) => payload.data
  );
  payloadRatings.forEach((obj) => handlingArray.push(obj.rating));
  const sum = handlingArray.reduce((a, b) => a + b, 0);
  const avg = sum / handlingArray.length || -1;
  expect(avg).toBeGreaterThan(-1);
  expect(typeof avg).toBe("number");
});

test("If the movies reviews is less than 5, then show the IMDB rating", async () => {
  const request = {
    params: {
      movieId: 1,
    },
  };
  const payload = await getRatings(request);
  const something = await getIMDB("It");
  expect(payload.data.length).toBeLessThan(26);
});

async function getIMDB(title) {
  const ratingForImdb = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=f9ce419a`
  ).then((res) => res.json());
  return ratingForImdb;
}
