const games = [ 
    { name: "Dota 2" , genre: "MOBA", realeaseYear: 2013 },
    { name: "Counter-Strike: Global Offensive", genre: "FPS", realeaseYear: 2012 },
    { name: "The Witcher 3: Wild Hunt", genre: "RPG", realeaseYear: 2015 },
    { name: "Elden Ring" , genre: "Action/RPG", realeaseYear: 2022 },
    { name: "The Forest " , genre: "Survival", realeaseYear: 2018 },
    { name: "Read Dead Redemption 2" , genre: "Action/Adventure", realeaseYear: 2018 },
    { name: "Detroit: Become Human" , genre: "Interactive Drama", realeaseYear: 2018 },
    { name: "Car Mechanic Simulator" , genre: "Simulation", realeaseYear: 2018 },
    { name: "CS:GO" , genre: "FPS", realeaseYear: 2012 },
    { name: "Valheim", genre: "Survival", realeaseYear: 2021 },
];
 games.forEach((game, index) => {
    console.log(`${index + 1}. Game: "${game.name}" | genre: ${game.genre} | releaseYear: ${game.realeaseYear}`);
});
const games = [
    { name: "Dota 2" },
    { name: "Counter-Strike: Global Offensive" },
    { name: "The Witcher 3: Wild Hunt" },
    { name: "Elden Ring" },
    { name: "The Forest" },
    { name: "Read Dead Redemption 2" },
    { name: "Detroit: Become Human" },
    { name: "Car Mechanic Simulator"},
    { name: "CS:GO" },
    { name: "Valheim" }
];