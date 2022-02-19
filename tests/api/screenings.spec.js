import {filterUpcoming} from "../../src/movieScreenings.js"

test('Test if filterUpcoming function returns upcoming date', async() => {
    // test if an time is larger than today 
    const filterdArr = await filterUpcoming(data, new Date());
    const now = new Date();
    filterdArr.forEach(screening => {
       expect(Date.parse(screening.time) > Date.parse(now)).toBeTruthy(); 
    });
});



const data = [{
    time: "2022-02-09T19:00:00.000Z"
}
,
{
    time: "2022-02-11T19:00:00.000Z"
}
,
{
    time: "2022-02-11T19:00:00.000Z"
    
},
{
    time: "2022-02-11T19:00:00.000Z"
}]