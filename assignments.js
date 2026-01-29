// 01 VALUE AND VARIABLES
const country = "Greece";
const continent = "Europe";
let population = 10000000;
let isIsland = false;
const language = "greek";

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language,
);

console.log(population / 2);
population++;

console.log(population > 600000);
console.log(population > 33000000);

const desricption =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;

console.log(desricption);
