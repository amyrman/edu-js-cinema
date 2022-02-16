import { loadScreenings } from "./movies.js";

export async function getScreenings(id) {
  const now = new Date();
  const screenings = await filterUpcoming(await loadScreenings(id), now);

  return {
    data: screenings.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
      };
    }),
  };
} 

export async function filterUpcoming(screenings, now) {
  const data = screenings.filter(obj => {
    const screeningTime = new Date(obj.attributes.start_time);
    return screeningTime > now;
  })
  .slice(0, 10);
  return data;
}