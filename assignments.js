// 01 VALUE AND VARIABLES
const country = "Greece";
const continent = "Europe";
let population = 10;
let isIsland = false;
const language = "greek";

// console.log(
//   typeof country,
//   typeof continent,
//   typeof population,
//   typeof isIsland,
//   typeof language,
// );

// console.log(population / 2);
// population++;

// console.log(population > 600000);
// console.log(population > 33000000);

// const desricption =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language;

// console.log(desricption);

// const desricptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// console.log(desricptionNew);

console.log(
  `${country} is in ${continent}, and its ${population} milion people speak ${language}`,
);

if (population > 33) {
  console.log(`${country} 's population is ${population} above average `);
} else {
  console.log(`${country} 's population is ${33 - population} below average`);
}
