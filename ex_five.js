//using map to reformat object in an array

const players = [
  { name: "Os", score: 10 },
  { name: "Har", score: 20 },
  { name: "Adr", score: 30 },
];
console.log(players);
const reFormattedArray = players.map((player) => ({
  // the keys have to be in square brackets
  [player.name]: player.score
}));

//using ES6 destructuring

const reFormattedArray2 = players.map(({ name, score }) => ({ [name]: score }));
console.log(reFormattedArray2)

