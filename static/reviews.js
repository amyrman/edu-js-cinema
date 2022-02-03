
const renderReviews = async () => {
  
  // Fetch reviews for movie
  const movieId = window.location.pathname;
  const response = await fetch(`/api${movieId}/reviews`);
  const payload = await response.json();
  console.log('Antal: ' + payload.data.length)

  // Calculate and set parameters for reviewpages
  const reviewsPerPage = 5;
  const reviewsPages = Math.ceil(payload.data.length / reviewsPerPage);
  let currentPage = 1;
  
  // Render the reviews for page nr #
  const renderReviewPage = async (pageNumber) => {

    const reviewDiv = document.querySelector("#reviewsList");
    reviewDiv.innerHTML = "";
    for(let i = (pageNumber-1) * reviewsPerPage; i < reviewsPerPage*pageNumber; i++) {
      
      // Create reviews in DOM
      if (payload.data[i]) {
        const comment = document.createElement('span');
        comment.classList.add('reviewComment');
        comment.innerText = payload.data[i].comment;
      
        const rating = document.createElement('span');
        rating.classList.add('reviewRating');
        rating.innerText = 'Betyg: ' + payload.data[i].rating;
    
        const author = document.createElement('blockquote');
        author.classList.add('reviewAuthor');
        author.innerText = payload.data[i].author;
    
        const li = document.createElement('li');
        li.append(comment);
        li.append(rating);
        li.append(author);
    
        reviewDiv.append(li);
      }
    }

    // If more than 5 reviews, create pages and buttons to see more reviews
    if (reviewsPages > 1) {
      const pages = document.createElement('div');
      pages.classList.add('reviewPages');

      const prevPage = document.createElement('a');
      prevPage.classList.add('prevPage');
      prevPage.innerHTML = '&#10094;';
  
      const nextPage = document.createElement('a');
      nextPage.classList.add('nextPage');
      nextPage.innerHTML = '&#10095;';
  
      prevPage.addEventListener("click", () => {
        if (currentPage == 1) {
          currentPage = reviewsPages;
        } else {
        currentPage--;
        }
        renderReviewPage(currentPage);
      });
  
      nextPage.addEventListener("click", () => {
        if (currentPage == reviewsPages) {
          currentPage = 1; 
        } else {
        currentPage++;
        }
        renderReviewPage(currentPage);
      })
      const showPageNumbers = document.createElement('span');
      showPageNumbers.innerText = `${currentPage}/${reviewsPages}`;

  
      pages.append(prevPage);
      pages.append(showPageNumbers);
      pages.append(nextPage);
      document.querySelector('#reviewsList').append(pages);

    }
  }

  renderReviewPage(currentPage);
}

renderReviews();