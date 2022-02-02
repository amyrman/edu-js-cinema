async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();

  const thing = document.querySelector("#reviews");
  thing.innerHTML = "";

  payload.data.forEach((review) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";
    thing.append(reviewDiv);

    

    const rating = document.createElement("div");
    rating.innerHTML = review.rating;
    reviewDiv.append(rating);

    //   const div = document.createElement('div');
  });
}

const url = window.location.href;
const arr = url.split("/");
const id = arr[arr.length - 1];

renderReviews(id);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/* function calculateAverage(rating){ */
/*   var total = 0; */
/*   var count = 0; */
/*  */
/*   rating.forEach(function(item, index) { */
/*     total += item; */
/*     count++; */
/*   }) */
/*   return total / count; */
/* } */
/*  */
/* console.log(calculateAverage(rating)); */

/* if(data.length >= 5){
   rating * rating.length / data.length;
};else{
  imdb betyg
}



*/