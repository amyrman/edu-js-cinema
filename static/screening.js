async function renderScreening() {
    const res = await fetch('/api/screenings/');
    const payload = await res.json();

    payload.data.forEach(screening => {
        const time = document.createElement('a');
        time.innerHTML = screening.time;

        const room = document.createElement('a');
        room.innerHTML = screening.room;

        const li = document.createElement('li');
        li.append(time);
        li.append(room);

        document.querySelector('#screeningsList').append(li);
    });
}

renderScreening();





