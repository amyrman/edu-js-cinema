import { getRatings } from "../src/rates.js";
import api from "../src/movies.js";
import { jest } from "@jest/globals";



// test ("Correct response format", async ()=>{
//     const payload = await getRatings(request);
//     console.log(payload);
// })
test ("Correct response format", async ()=>{
    const request = {
      params: {
        movieId: 1
      }
    }
    const payload = await getRatings(request);

    
    expect(payload.data.length).toBeGreaterThan(5);
    // expect(payload.data[0].title).toBeTruthy();
    // expect(payload.data[0].rating).toBeTruthy(0);
    // expect(payload.data[0].id).toBeGreaterThan(0);



})