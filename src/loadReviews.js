import fetch from 'node-fetch';

const loadReviews = async (id) => {
  const API = `https://lernia-kino-cms.herokuapp.com/api/reviews?filters[movie]=${id}&pagination[pageSize]=100`;
  const reviews = await fetch(API);
  const data = await reviews.json();
  return data.data;
}

export { loadReviews };