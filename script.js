console.log(games[0].name);
console.log(games[1].genre);
const games = [
  { name: "Dota 2", genre: "MOBA", releaseYear: 2013 },
  { name: "Counter-Strike: Global Offensive", genre: "FPS", releaseYear: 2012 },
  { name: "The Witcher 3: Wild Hunt", genre: "RPG", releaseYear: 2015 },
  { name: "Elden Ring", genre: "Action/RPG", releaseYear: 2022 },
  { name: "The Forest", genre: "Survival", releaseYear: 2018 },
  { name: "Red Dead Redemption 2", genre: "Action/Adventure", releaseYear: 2018 },
  { name: "Detroit: Become Human", genre: "Interactive Drama", releaseYear: 2018 },
  { name: "Car Mechanic Simulator", genre: "Simulation", releaseYear: 2018 },
  { name: "CS:GO", genre: "FPS", releaseYear: 2012 },
  { name: "Valheim", genre: "Survival", releaseYear: 2021 },
];

games.forEach((game, index) => {
  console.log(`${index + 1}. Game: "${game.name}" | genre: ${game.genre} | releaseYear: ${game.releaseYear}`);
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
const sortedByName = [...games].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName); 