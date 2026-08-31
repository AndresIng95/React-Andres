console.log("Hello World Star Wars");

async function obtenerPersonajes() {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    console.log('Personajes:', data.results);
    return data.results;
}

console.log(obtenerPersonajes());

function pintarPersonajes(personajes) {
    console.log("Pintando personajes:", personajes);
    let tarjetasHTML = "";
    console.log("Tarjetas HTML:", tarjetasHTML);
    personajes.forEach(personaje => {
        tarjetasHTML += `
        <div class="card">

            <h3>${personaje.name}</h3>

            <p>Height: ${personaje.height} cm</p>

            <p>Mass: ${personaje.mass} kg</p>

            <p>Hair: ${personaje.hair_color}</p>

            <p>Eyes: ${personaje.eye_color}</p>

        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPersonajes().then(pintarPersonajes);
