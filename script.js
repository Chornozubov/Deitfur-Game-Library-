const defaultGames = [
  { id: 1, name: "Dota 2", genre: "MOBA", releaseYear: 2013 },
  { id: 2, name: "Counter-Strike: Global Offensive", genre: "FPS", releaseYear: 2012 },
  { id: 3, name: "The Witcher 3: Wild Hunt", genre: "RPG", releaseYear: 2015 },
  { id: 4, name: "Elden Ring", genre: "Action/RPG", releaseYear: 2022 },
  { id: 5, name: "The Forest", genre: "Survival", releaseYear: 2018 },
  { id: 6, name: "Red Dead Redemption 2", genre: "Action/Adventure", releaseYear: 2018 },
  { id: 7, name: "Detroit: Become Human", genre: "Interactive Drama", releaseYear: 2018 },
  { id: 8, name: "Car Mechanic Simulator", genre: "Simulation", releaseYear: 2018 },
  { id: 9, name: "CS:GO", genre: "FPS", releaseYear: 2012 },
  { id: 10, name: "Valheim", genre: "Survival", releaseYear: 2021 },
];

const savedGames = localStorage.getItem("games");
const games = savedGames
  ? JSON.parse(savedGames)
  : defaultGames;

function saveGames() {
  localStorage.setItem("games", JSON.stringify(games));
}

games.forEach((game, index) => {
  console.log(`${index + 1}. Game: "${game.name}" | genre: ${game.genre} | releaseYear: ${game.releaseYear}`);
});

games.forEach(function(game) {
  console.log(game.id, game.name);
});

function getGamesByYear(year) {
  return games.filter(game => game.releaseYear === year);
}

console.log(getGamesByYear(2018));
console.log(getGamesByYear(2012));
console.log(getGamesByYear(2022));

function searchGame(query) {
  return games.find(game =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );
}
console.log(searchGame("dota"));
console.log(searchGame("witcher"));
console.log(searchGame("counter"));
console.log(searchGame("elden"));
console.log(searchGame("forest"));
console.log(searchGame("red dead"));
console.log(searchGame("detroit"));
console.log(searchGame("mechanic"));
console.log(searchGame("cs:go"));
console.log(searchGame("valheim"));

const names = games.map(game => game.name);
console.log(names);

const genres = games.map(game => game.genre);
console.log(genres);

const releaseYears = games.map(game => game.releaseYear);
console.log(releaseYears);

const uniqueGenres = [...new Set(genres)];
console.log(uniqueGenres);

const sortedByName = [...games].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(sortedByName);

const sortedByReleaseYear = [...games].sort((a, b) => a.releaseYear - b.releaseYear);
console.log(sortedByReleaseYear);

function addGame(game) {
  games.push(game);
  saveGames();
  renderGames();
}

const gamelist = document.getElementById("game-list");

function createGameCard(game) {
  return `
    <div class="game-card">
      <h3>${game.name}</h3>
      <p>Genre: ${game.genre}</p>
      <p>Year: ${game.releaseYear}</p>
    </div>
  `;
}

function renderGames() {
  gamelist.innerHTML = "";

  games.forEach(function(game) {
    gamelist.innerHTML += createGameCard(game);
  });
}
renderGames();

const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");

function renderFilteredGames(filteredGames) {
  gamelist.innerHTML = "";
  filteredGames.forEach(function(game) {
    gamelist.innerHTML += createGameCard(game);
  });
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;

  const filteredGames = games.filter(game => {

    const matchesQuery = !query || game.name.toLowerCase().includes(query);
    const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;
    return matchesQuery && matchesGenre;
  });

  renderFilteredGames(filteredGames);
}
uniqueGenres.forEach(function(genre) {
  genreFilter.innerHTML += `<option value="${genre}">${genre}</option>`;
});
searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);
