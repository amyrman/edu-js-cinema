/**
 * @jest-environment jsdom
 */
import { renderReviewPage } from "../static/reviews.js"

test('Test pagination', async () => {

const reviews = mockapi;
const reviewsPerPage = 5;
const totalPages = Math.ceil(reviews.data.length / reviewsPerPage);
const firstPage = 1;


const reviewsLength = reviews.data.length;
expect(reviews.data).toHaveLength(36);
expect(reviewsLength).toBeGreaterThan(10);
expect(totalPages).toEqual(8);

const element = document.createElement('div');
expect(element).not.toBeNull();


expect(renderReviewPage(reviews, reviewsPerPage, totalPages, firstPage)).toBeTruthy();


});

const mockapi = {
  "data": [
    {
      "comment": "This is also great!",
      "author": "Richard",
      "rating": 0
    },
    {
      "comment": "Awesome movie!",
      "author": "John Doe",
      "rating": 5
    },
    {
      "comment": "K",
      "author": "L",
      "rating": 3
    },
    {
      "comment": "OK",
      "author": "Lia",
      "rating": 4
    },
    {
      "comment": "Super",
      "author": "Karl",
      "rating": 5
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "yes",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "Good yes.",
      "author": "Olga",
      "rating": 4
    },
    {
      "comment": "Greatest Moviest. You heard me. (Testing from Heroku)",
      "author": "Johan Herokusson",
      "rating": 5
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "love it ",
      "author": "reviewer",
      "rating": 2
    },
    {
      "comment": "love it ",
      "author": "reviewer",
      "rating": 2
    },
    {
      "comment": "Im jealous of the godfather.",
      "author": "Batman",
      "rating": 3
    },
    {
      "comment": "s",
      "author": "reviewer",
      "rating": 1
    },
    {
      "comment": "xx",
      "author": "reviewer",
      "rating": 1
    },
    {
      "comment": "x",
      "author": "reviewer",
      "rating": 2
    },
    {
      "comment": "cdfsdfsfe",
      "author": "reviewer",
      "rating": 2
    },
    {
      "comment": "I love this movie!",
      "author": "godmother",
      "rating": 5
    },
    {
      "comment": "I love this movie!",
      "author": "godmother",
      "rating": 5
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 5
    },
    {
      "comment": "i love this movie",
      "author": "godmother",
      "rating": 4
    },
    {
      "comment": "Too much action. Too little flowers and kisses\n",
      "author": "Johan Herokusson",
      "rating": 3
    },
    {
      "comment": "Too much action. Too little flowers and kisses",
      "author": "Johan Herokusson",
      "rating": 3
    },
    {
      "comment": "good job my son",
      "author": "godgrandfather",
      "rating": 4
    },
    {
      "comment": "I'm so happy",
      "author": "godgrandmother",
      "rating": 4
    },
    {
      "comment": "I hate this guy",
      "author": "godneighbor",
      "rating": 0
    },
    {
      "comment": "good",
      "author": "hej",
      "rating": 4
    },
    {
      "comment": "Don Corleone <3",
      "author": "Göte",
      "rating": 5
    },
    {
      "comment": "Michael",
      "author": "Fredo, you’re my older brother, and I love you. But don’t ever take sides with anyone against the Family again. Ever.",
      "rating": 5
    },
    {
      "comment": "damn!",
      "author": "goddamn",
      "rating": 5
    },
    {
      "comment": "Very Nice",
      "author": "Doe!",
      "rating": 5
    },
    {
      "comment": "Lets go!",
      "author": "Don C",
      "rating": 5
    },
    {
      "comment": "Test",
      "author": "Random Hero/Tester",
      "rating": 5
    }
  ]
}