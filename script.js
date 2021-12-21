console.log("Running..");

// Load data from API/DB
const load = async() => {
    const url = 'src/data.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            const movies = data.movies;
            return movies;
        } catch (error) {
            console.log(error);
        }
}


const render = async () => {
    const data = await load()
    console.log(data)
}

render();