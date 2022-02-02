async function renderScreening(id) {

    const payload = await fetch(`/api/screenings/${id}`).then(res => res.json());
    payload.data.forEach(screening => {
        const time = document.createElement('a');
        time.innerHTML = screening.time;

        const room = document.createElement('span');
        room.innerHTML = screening.room;

        const li = document.createElement('li');
        li.append(time);
        li.append(room);

        document.querySelector('#screeningsList').append(li);
    
    });
}

const url = window.location.href;
const arr = url.split("/");
const id = arr[arr.length - 1];

 renderScreening(id);





