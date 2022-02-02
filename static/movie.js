async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();

  const thing = document.querySelector("#reviews");
  thing.innerHTML = "";

  function calculateAverage(array) {
    let count = 0;
    let handlingArray = [];
    const countALL = array.map((a) => count++);
    /// här kollar du annars return
    if (payload.data.length > 100) {
      array.forEach((obj) => handlingArray.push(obj.rating));
      const sum = handlingArray.reduce((a, b) => a + b, 0);
      const avg = sum / handlingArray.length || 0;

      return avg;
    } else {
      // imdb

      return payload.data.length;
    }
  }

  calculateAverage(payload.data);

  const parent = document.createElement("div");
  parent.textContent = calculateAverage(payload.data);
  document.body.append(parent);

  console.log(parent);
}

const url = window.location.href;
const arr = url.split("/");
const id = arr[arr.length - 1];

renderReviews(id);
