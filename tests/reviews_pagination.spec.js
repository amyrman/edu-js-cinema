/**
 * @jest-environment jsdom
 */

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

const renderReviewPage = async (reviews, reviewsPerPage, totalPages, pageNumber) => {

  const reviewDiv = document.querySelector("#reviewsList");
  reviewDiv.innerHTML = "";

  // Create reviews in DOM
  for(let i = (pageNumber-1) * reviewsPerPage; i < reviewsPerPage*pageNumber; i++) {
    if (reviews.data[i]) {
      const comment = document.createElement('span');
      comment.classList.add('reviewComment');
      comment.innerText = reviews.data[i].comment;
    
      const rating = document.createElement('span');
      rating.classList.add('reviewRating');
      rating.innerText = 'Betyg: ' + reviews.data[i].rating;
  
      const author = document.createElement('blockquote');
      author.classList.add('reviewAuthor');
      author.innerText = reviews.data[i].author;
  
      const li = document.createElement('li');
      li.append(comment);
      li.append(rating);
      li.append(author);
  
      reviewDiv.append(li);
    }
  }
  // If more than 5 reviews, create pages and buttons to see more reviews
  if (totalPages > 1) {
    const pages = document.createElement('div');
    pages.classList.add('reviewPages');

    const prevPage = document.createElement('a');
    prevPage.classList.add('prevPage');
    prevPage.innerHTML = '&#10094;';

    const nextPage = document.createElement('a');
    nextPage.classList.add('nextPage');
    nextPage.innerHTML = '&#10095;';

    prevPage.addEventListener("click", () => {
      if (pageNumber == 1) {
        pageNumber = totalPages;
      } else {
      pageNumber--;
      }
      renderReviewPage(reviews, reviewsPerPage, totalPages, pageNumber);
    });

    nextPage.addEventListener("click", () => {
      if (pageNumber == totalPages) {
        pageNumber = 1; 
      } else {
      pageNumber++;
      }
      renderReviewPage(reviews, reviewsPerPage, totalPages, pageNumber);
    })
    
    const showPageNumbers = document.createElement('span');
    showPageNumbers.innerText = `${pageNumber}/${totalPages}`;

    pages.append(prevPage);
    pages.append(showPageNumbers);
    pages.append(nextPage);
    document.querySelector('#reviewsList').append(pages);
  }
}

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