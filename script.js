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

    const eventsElement = document.querySelector('.events');
    for (let i = 0; i < 4; i++) {
        const eventContainer = document.createElement('div');

        const eventImage = document.createElement('div');
        eventImage.className = 'eventImage';
        eventImage.style.backgroundImage = data[i].coverImg

        const eventDate = document.createElement('div');
        eventDate.className = 'eventDate';

        const eventDescription = document.createElement('div');
        eventDescription.className = 'eventDescription';

        eventContainer.appendChild(eventImage);
        eventContainer.appendChild(eventDate);
        eventContainer.appendChild(eventDescription)
        eventsElement.appendChild(eventContainer);
    }

    console.log(data)
}

render();