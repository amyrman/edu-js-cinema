import { getRatings } from "../src/rates.js";

import request from 'request';
test ("Correct response format", async ()=>{
    const lifeLoad = await getRatings(request);
    console.log(payload);
})