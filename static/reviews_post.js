const reviewForm = document.querySelector('#reviewForm');

reviewForm.addEventListener('submit', async (event) => {
  
  event.preventDefault();
  const movieId = event.target.movie.value;
  // console.log(movieId);
  
  // console.log(`/movies/${movieId}/reviews`);
  
  const postReview = await fetch(`/movies/${movieId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },    
    body: JSON.stringify({
      'data': {
      'author': event.target.comment.value,
      'comment': event.target.comment.value,
      'rating': event.target.comment.value,
      'verified': true,
      'movie': movieId,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'createdBy': 'string or id',
      'updatedBy': 'string or id'
        }
      })
    });
    // console.log(postReview);

  //   .catch(error => console.log('ERROR'))
});
