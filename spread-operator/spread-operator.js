let top6 = ["Vienna", "Krakow", "Paris", "Lisbon", "New York", "Berlin"];

const [first, second, third, ...secondTravel] = top6;

console.log(`Here are top3 cities: ${first} ${second} ${third}`);
console.log(`For the second travel: ${secondTravel}`);

const names = ["Pedro", "Ruben", "Marrie", "Darly"];
const surnames = ["John", "Yubn", "Pereira"];

const namesSurnames = [...names, ...surnames];
console.log(...namesSurnames);