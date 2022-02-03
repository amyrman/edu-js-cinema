import fetch from 'node-fetch';

const loadReviews = async (id) => {
  const API = 'https://lernia-kino-cms.herokuapp.com/api';
  const reviews = await fetch(`${API}/reviews?filters[movie]=${id}&pagination[pageSize]=100`);
  const data = await reviews.json();
  return data.data;
}

export { loadReviews };