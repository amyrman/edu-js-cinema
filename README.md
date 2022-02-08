# Kino på MARS!

## Screenings

The screenings route returns an object with a array of data containing upcoming screenings for the five coming days. Each screening in the array is an object with keys: id, title, movieId, image, start_time and room.

- **URL**
  /api/screenings

- **Method:**
  GET

- **Success Response**
  Code: 200
  Content: `{ "data": [ { "id": 29, "title": "Threat Level Midnight: The Movie", "movieId": 10, "image": "https://m.media- amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg", "start_time": "2022-01-31T12:00:00.000Z", "room": "Stora salongen" } ] }`


## Review for specific movie id

This route returns an object with an array of data containing reviews for the movie :id. Each reviews contains the keys: comment, author and rating. 
If no such movie exists, returns 404.

  - **URL**
  /api/movies/:id/reviews

  - **Method:**
  GET

  - **Success Response**
  Code: 200
  Content: {
    "data": [
      {
        "comment": "Test",
        "author": "Random Hero/Tester",
        "rating": 5
      },
      {
        "comment": "Good yes.",
        "author": "Olga",
        "rating": 4
      }
    ]
  }

  - **Failed Response**
  Code: 404
  Content: ""