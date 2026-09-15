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
function getGameByYear(year) {
    return games.filter(game => game.releaseYear === year);
 console.log(getGamesByYear(2018));
 console.log(getGamesByYear(2012));
 console.log(getGamesByYear(2022));
}