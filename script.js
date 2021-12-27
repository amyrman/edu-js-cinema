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

  const eventsContainer = document.querySelector('.eventsContainer');
  eventsElement.appendChild(eventsContainer);

  for (let i = 0; i < 4; i++) {
      const eventContainer = document.createElement('div')
      eventContainer.className = 'eventContainer'

      const eventLink = document.createElement('a');
      eventLink.href = '#';

      const eventImage = document.createElement('div');
      eventImage.className = 'eventImage';
      eventImage.style.backgroundImage = `url(${data[i].bannerImg})`

      const eventDate = document.createElement('div');
      eventDate.className = 'eventDate';
      const eventDateFirstDiv = document.createElement('div');
      eventDateFirstDiv.innerText = data[i].release.substring(10, 8);
      eventDate.appendChild(eventDateFirstDiv);
      const eventDateSecondDiv = document.createElement('div');
      const movieMonth = data[i].release.substring(7, 5);

      switch(parseInt(movieMonth)) {
          case 1:
              eventDateSecondDiv.innerText = 'Jan'
              break;
          case 2:
              eventDateSecondDiv.innerText = 'Feb'
              break;
          case 3:
              eventDateSecondDiv.innerText = 'Mar'
              break;
          case 4:
              eventDateSecondDiv.innerText = 'Apr'
              break;
          case 5:
              eventDateSecondDiv.innerText = 'Maj'
              break;
          case 6:
              eventDateSecondDiv.innerText = 'Jun'
              break;
          case 7:
              eventDateSecondDiv.innerText = 'Jul'
              break;
          case 8:
              eventDateSecondDiv.innerText = 'Aug'
              break;
          case 9:
              eventDateSecondDiv.innerText = 'Sep'
              break;
          case 10:
              eventDateSecondDiv.innerText = 'Okt'
              break;
          case 11:
              eventDateSecondDiv.innerText = 'Nov'
              break;
          case 12:
              eventDateSecondDiv.innerText = 'Dec'
              break;
      };
      eventDate.appendChild(eventDateSecondDiv);

      const eventTitle = document.createElement('div');
      eventTitle.className = 'eventTitle';
      eventTitle.innerText = data[i].movieTitle;

      eventContainer.appendChild(eventImage);
      eventImage.appendChild(eventDate);
      eventContainer.appendChild(eventTitle);
      eventLink.appendChild(eventContainer);
      eventsContainer.appendChild(eventLink);
  }

  console.log(data)
}

render();


const heroSlider = async () => {
  // From HTML
  const movies = await load();
  const prev = document.querySelector(".heroPicPrev");
  const next = document.querySelector(".heroPicNext");
  const heroContainer = document.querySelector(".heroContainer");

  // Get all banners from API
  const heroMovieBanner = [];
  for (let i = 0, j = movies.length; i < j; i++) {
    heroMovieBanner.push(movies[i].bannerImg);
  }

  //Functions for next and previous slide
  const heroNextSlide = () => {
    slideIndex =
      slideIndex < movies.length - 1 
			? (slideIndex += 1) 
			: (slideIndex = 0);
    heroContainer.style.backgroundImage = `url(${heroMovieBanner[slideIndex]})`;
  };
  const heroPrevSlide = () => {
    slideIndex = slideIndex
      ? (slideIndex -= 1)
      : (slideIndex = movies.length - 1);
    heroContainer.style.backgroundImage = `url(${heroMovieBanner[slideIndex]})`;
  };

  // Set hero to first banner loaded from API
  let slideIndex = 0;
  heroContainer.style.backgroundImage = `url(${heroMovieBanner[slideIndex]})`;

  // Click on previous and next to change banner
  next.addEventListener("click", () => {
    heroNextSlide();
  });
  prev.addEventListener("click", () => {
    heroPrevSlide();
  });

	// Autoslider
  setInterval(heroNextSlide, 10000);
};


heroSlider();