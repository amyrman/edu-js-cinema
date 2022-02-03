async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();
  const thing = document.querySelector("#reviews");
  thing.innerHTML = "";

  async function calculateAverage(array, title, count) {
    let handlingArray = [];  
    const key = "f9ce419a";// nyckel till imdb
    if (count >= 5) {
      array.forEach((obj) => handlingArray.push(obj.rating));
      const sum = handlingArray.reduce((a, b) => a + b, 0);
      const avg = sum / handlingArray.length || 0;

      return avg.toFixed(1)*1;
     
    } else {
      const imdbRatingGet = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=f9ce419a`).then(res => res.json());
      return imdbRatingGet.imdbRating
    }
  }

  //calculateAverage();

  const parent = document.createElement("div");
  parent.innerHTML = await calculateAverage(payload.data, payload.title,payload.count);
  document.body.append(parent);

  
}

const url = window.location.href;
const arr = url.split("/");
const id = arr[arr.length - 1];

renderReviews(id);
