const episodeList = document.querySelector('.films-list');
const showInformation = document.getElementById(`show-information`);
const selectEpisode = document.getElementById(`select-episode`);
const toPlanet = document.getElementById(`planets`);
const table = document.getElementById("characters-table");

fetch("https://swapi.dev/api/films")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const episode = data.results;
        episode.map((film) => {
            episodeList.innerHTML += `<li> Episode ${film.episode_id} - ${film.title}</li>`
        })
    })
const getCharacters = (episode) => fetch("https://swapi.dev/api/people")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const heroes = data.results.filter((character) =>
            character.films.includes(`http://swapi.dev/api/films/${episode}/`))
        heroes.map((character) => {
            table.innerHTML += `
            <tr>
                <td>${character.name}</td>
                <td>${character.birth_year}</td>
                <td>${character.gender}</td>
            </tr>`
        })
    })

showInformation.addEventListener("click", () => {
    const episode = selectEpisode.value;
    getCharacters(episode);
});
toPlanet.addEventListener("click", () => {
    window.location.href = "html/planets.html";
}) 
