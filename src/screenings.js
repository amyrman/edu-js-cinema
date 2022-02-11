import fetch from 'node-fetch';

const API_BASEURL =
  'https://lernia-kino-cms.herokuapp.com/api/screenings?populate=movie&pagination[pageSize]=1500';

export function trimData (screeningsArray) {
  const trimmedArr = screeningsArray.map((screening) => {
    return {
      id: screening.id,
      title: screening.attributes.movie.data.attributes.title,
      movieId: screening.attributes.movie.data.id,
      image: screening.attributes.movie.data.attributes.image.url,
      start_time: screening.attributes.start_time,
      room: screening.attributes.room
    };
  });
  return trimmedArr;
};

export function filterOldScreenings (screenings, todaysDate) {
  const upcomingScreenings = screenings.filter((screening) => {
    if (Date.parse(screening.start_time) > Date.parse(todaysDate)) {
      return screening;
    }
  });
  return upcomingScreenings;
};

export function filterNextFiveDaysScreenings (screenings, futureDate) {
  const filteredScreenings = screenings.filter((screening) => {
    if (Date.parse(screening.start_time) < Date.parse(futureDate)) {
      return screening;
    }
  });
  return filteredScreenings;
};

const sortScreeningsByDate = (screenings) => {
  const sortedScreenings = screenings.sort((a, b) => {
    const keyA = new Date(a.start_time);
    const keyB = new Date(b.start_time);
    // Comparing the two dates
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0;
  });

  return sortedScreenings;
};

export const filterByUpomingScreenings = (arr, days) => {
  const todaysDate = new Date();
  const ms = new Date().getTime() + 86400000 * days;
  const futureDate = new Date(ms);

  const filteredByOldScreenings = filterOldScreenings(arr, todaysDate);

  const filteredByFutureScreenings = filterNextFiveDaysScreenings(
    filteredByOldScreenings,
    futureDate
  );

  const sortedAndFilteredScreenings = sortScreeningsByDate(
    filteredByFutureScreenings
  );

  return sortedAndFilteredScreenings.splice(0, 10);
};

export async function getUpcomingScreenings() {
  const dataBuff = await fetch(API_BASEURL);
  const data = await dataBuff.json();
  const screeningsData = await data.data;

  const trimedData = trimData(screeningsData);
  const filteredData = filterByUpomingScreenings(trimedData, 5);
  return filteredData;
};
