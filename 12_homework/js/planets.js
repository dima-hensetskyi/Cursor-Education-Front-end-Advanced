const planetList = document.querySelector('.planets-list');

fetch("https://swapi.dev/api/planets/")
    .then((response) => response.json())
    .then((data) => {
        const planet = data.results;
        planet.map((planet) => {
            planetList.innerHTML += (`
            <tr>
              <td>${planet.name}</td>
              <td>${planet.population}</td>
              <td>${planet.orbital_period}</td>
            </tr>`)
        })
    })