async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();

  const thing = document.querySelector("#reviews");
  thing.innerHTML = "";

// const array = [] ;
// const  hej = array.push(payload.data);





///////
function calculateAverage(array) {
  let count = 0;
  let handlingArray = [];
  const countALL = array.map(a => count++);
  /// här kollar du annars return 
  if (countALL >= 5){
    array.forEach(obj => handlingArray.push(obj.rating));
  const sum = handlingArray.reduce((a, b) => a + b, 0);
  const avg = (sum / handlingArray.length) || 0;
  console.log(sum, avg);
  }
  else{
    // imdb 
  }
  



}

calculateAverage(payload.data);
// console.log(arry); 
// console.log(payload.data);






  payload.data.forEach((review) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";
    thing.append(reviewDiv);

    const rating = document.createElement("div");
    rating.innerHTML = review.rating;
    reviewDiv.append(rating);
    // console.log(rating);

    
    
  
    
    
    
    
    

    ///////

    

    
  });
  

  

}

const url = window.location.href;
const arr = url.split("/");
const id = arr[arr.length - 1];

renderReviews(id);


//  if(data.length >= 5){

//    rating * rating.length / data.length;
// };else{
//   imdb betyg
// }
