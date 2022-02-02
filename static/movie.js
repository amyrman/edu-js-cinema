async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();

  const thing = document.querySelector("#reviews");
  thing.innerHTML = "";

  payload.data.forEach((review) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";
    thing.append(reviewDiv);

    const comment = document.createElement("div");
    comment.innerHTML = review.comment;
    reviewDiv.append(comment);

    const name = document.createElement("div");
    name.innerHTML = review.name;
    reviewDiv.append(name);

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
