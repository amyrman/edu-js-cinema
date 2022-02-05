import { getRatings } from "../src/rates.js";
// import api from "../src/movies.js";
import { jest } from "@jest/globals";



// test ("Correct response format", async ()=>{
//     const payload = await getRatings(request);
//     console.log(payload);
// })
test ("Correct response format", async ()=>{
    const request = {
      params: {
        movieId: 1
      }
    }
    const payload = await getRatings(request);

    
    expect(payload.data.length).toBeGreaterThan(5);



})


//Mock API
const api = {
    async loadRating() {
      return [
        {
          id: 57,
          attributes: {
            comment: "This is also great!",
            rating: 0,
            author: "Richard",
            verified: null,
            createdAt: "2022-01-27T13:25:43.197Z",
            updatedAt: "2022-01-27T13:25:43.197Z",
          },
        },
        {
          id: 58,
          attributes: {
            comment: "This is a review from other site. I have been hacked!",
            rating: 0,
            author: "Richard",
            verified: null,
            createdAt: "2022-01-27T13:27:11.595Z",
            updatedAt: "2022-01-27T13:27:11.595Z",
          },
        },
        {
          id: 59,
          attributes: {
            comment: "Another review!",
            rating: 0,
            author: "Richard",
            verified: null,
            createdAt: "2022-01-27T13:32:27.339Z",
            updatedAt: "2022-01-27T13:32:27.339Z",
          },
        },
        {
          id: 60,
          attributes: {
            comment: "This is a review from other site. I have been hacked!",
            rating: 0,
            author: null,
            verified: null,
            createdAt: "2022-01-27T13:33:19.051Z",
            updatedAt: "2022-01-27T13:33:19.051Z",
          },
        },
        {
          id: 61,
          attributes: {
            comment: "<script>console.log('hello');</script>",
            rating: 0,
            author: "Richard",
            verified: null,
            createdAt: "2022-01-27T13:46:28.313Z",
            updatedAt: "2022-01-27T13:46:28.313Z",
          },
        },
        {
          id: 62,
          attributes: {
            comment:
              "<script>location.href='http://evilhackingsite.com:6660/login.html';</script>",
            rating: 0,
            author: null,
            verified: null,
            createdAt: "2022-01-27T13:47:46.634Z",
            updatedAt: "2022-01-27T13:47:46.634Z",
          },
        },
        {
          id: 63,
          attributes: {
            comment: "Top notch!",
            rating: 0,
            author: "Inte Richard",
            verified: null,
            createdAt: "2022-01-28T14:10:57.406Z",
            updatedAt: "2022-01-28T14:10:57.406Z",
          },
        },
        {
          id: 64,
          attributes: {
            comment: "testing",
            rating: 3,
            author: "Johan",
            verified: true,
            createdAt: "2022-01-29T11:56:20.052Z",
            updatedAt: "2022-01-29T11:56:20.052Z",
          },
        },
        {
          id: 65,
          attributes: {
            comment: "Bästigaste filmen",
            rating: 5,
            author: "Johan",
            verified: true,
            createdAt: "2022-01-30T20:38:06.676Z",
            updatedAt: "2022-01-30T20:38:06.676Z",
          },
        },
        {
          id: 66,
          attributes: {
            comment: "Test",
            rating: 4,
            author: "Test",
            verified: null,
            createdAt: "2022-01-31T08:41:32.615Z",
            updatedAt: "2022-01-31T08:41:32.615Z",
          },
        },
        {
          id: 67,
          attributes: {
            comment: "Test",
            rating: 4,
            author: "Test",
            verified: null,
            createdAt: "2022-01-31T08:43:42.371Z",
            updatedAt: "2022-01-31T08:43:42.371Z",
          },
        },
        {
          id: 68,
          attributes: {
            comment: "Good movie",
            rating: 5,
            author: "Johan",
            verified: null,
            createdAt: "2022-01-31T08:49:21.113Z",
            updatedAt: "2022-01-31T08:49:21.113Z",
          },
        },
        {
          id: 69,
          attributes: {
            comment: "hello world",
            rating: 5,
            author: "haeju",
            verified: null,
            createdAt: "2022-01-31T09:20:04.812Z",
            updatedAt: "2022-01-31T09:20:04.812Z",
          },
        },
        {
          id: 70,
          attributes: {
            comment: "Testing",
            rating: 5,
            author: "Johan",
            verified: null,
            createdAt: "2022-01-31T09:31:24.255Z",
            updatedAt: "2022-01-31T09:31:24.255Z",
          },
        },
        {
          id: 71,
          attributes: {
            comment: "This movie makes me angry",
            rating: 1,
            author: "Angry person",
            verified: null,
            createdAt: "2022-01-31T10:26:44.618Z",
            updatedAt: "2022-01-31T10:26:44.618Z",
          },
        },
        {
          id: 72,
          attributes: {
            comment: "This movie has nice vibe",
            rating: 5,
            author: "Nice person",
            verified: null,
            createdAt: "2022-01-31T10:44:44.572Z",
            updatedAt: "2022-01-31T10:44:44.572Z",
          },
        },
        {
          id: 73,
          attributes: {
            comment: "This is a test comment!",
            rating: 2,
            author: "Test",
            verified: null,
            createdAt: "2022-01-31T11:20:10.045Z",
            updatedAt: "2022-01-31T11:20:10.045Z",
          },
        },
        {
          id: 74,
          attributes: {
            comment: "Awesome movie!",
            rating: 5,
            author: "John Doe",
            verified: null,
            createdAt: "2022-01-31T11:21:32.948Z",
            updatedAt: "2022-01-31T11:21:32.948Z",
          },
        },
        {
          id: 75,
          attributes: {
            comment: "test",
            rating: 0,
            author: null,
            verified: null,
            createdAt: "2022-01-31T14:30:49.120Z",
            updatedAt: "2022-01-31T14:30:49.120Z",
          },
        },
        {
          id: 76,
          attributes: {
            comment: "Test",
            rating: 4,
            author: "John Doe",
            verified: null,
            createdAt: "2022-01-31T15:01:31.793Z",
            updatedAt: "2022-01-31T15:01:31.793Z",
          },
        },
        {
          id: 77,
          attributes: {
            comment: "Test",
            rating: 4,
            author: "John Doe",
            verified: null,
            createdAt: "2022-01-31T15:01:38.398Z",
            updatedAt: "2022-01-31T15:01:38.398Z",
          },
        },
        {
          id: 78,
          attributes: {
            comment: "Test",
            rating: 4,
            author: "John Doe",
            verified: null,
            createdAt: "2022-01-31T15:01:39.050Z",
            updatedAt: "2022-01-31T15:01:39.050Z",
          },
        },
        {
          id: 79,
          attributes: {
            comment: "string",
            rating: 0,
            author: "string",
            verified: true,
            createdAt: "2022-01-31T16:01:50.050Z",
            updatedAt: "2022-01-31T16:01:50.050Z",
          },
        },
        {
          id: 80,
          attributes: {
            comment: "string",
            rating: 0,
            author: "string",
            verified: true,
            createdAt: "2022-01-31T16:08:59.873Z",
            updatedAt: "2022-01-31T16:08:59.873Z",
          },
        },
        {
          id: 81,
          attributes: {
            comment: "string",
            rating: 0,
            author: "string",
            verified: true,
            createdAt: "2022-01-31T16:31:10.042Z",
            updatedAt: "2022-01-31T16:31:10.042Z",
          },
        },
      ];
    },
  };
  