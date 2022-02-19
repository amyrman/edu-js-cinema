async function renderRating(movieId) {
  const res = await fetch(`/api/movies/${movieId}/rating`);
  const payload = await res.json();

  const thing = document.querySelector("#rating");
  thing.innerHTML = "";

  async function calculateAverage(array, title, count) {
    let handlingArray = [];
    const key = "f9ce419a";
    if (count >= 5) {
      array.forEach((obj) => handlingArray.push(obj.rating));
      const sum = handlingArray.reduce((a, b) => a + b, 0);
      const avg = sum / handlingArray.length || 0;

      return avg.toFixed(1) * 1;
    } else {
     const imdbRatingGet = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=f9ce419a`
      ).then((res) => res.json());
      return imdbRatingGet.imdbRating;
    }
  }

  const rateDiv = document.createElement("div");
  rateDiv.className = "ratingStars";
  thing.append(rateDiv);

  const parent = document.createElement("div");
  parent.innerHTML = await calculateAverage(
    payload.data,
    payload.title,
    payload.count
  );
  rateDiv.append(parent);
}

const linken = window.location.href;
const barr = linken.split("/");
const barrID = barr[barr.length - 1];

renderRating(barrID);


