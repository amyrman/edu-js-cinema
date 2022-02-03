window.onload = async ()=> {
  try { 
    renderReviews();
  } catch { (error)
    console.log(error);
  }
}

const getReviews = async () => {
  const movieId = window.location.pathname;
  const response = await fetch(`/api${movieId}/reviews`);
  const payload = await response.json();
  return payload; 
}

const renderReviews = async () => {

  const reviews = await getReviews();
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviews.data.length / reviewsPerPage);
  const firstPage = 1;
  
  renderReviewPage(reviews, reviewsPerPage, totalPages, firstPage);
}

// Render the reviews for page number #
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

export { renderReviewPage }