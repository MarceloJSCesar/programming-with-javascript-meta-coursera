let cars = ["Lamb", "Porchse", "Benz", "Ferrari", "Cadilac"];

for (car of cars) {
    console.log('car:',cars);
}

let closet = {
    name: "Quavo Closet",
    clothes: ["Gucci", "Prada", "Benley"],
};

for (clos of Object.entries(closet)) { // Object.keys, Object.values and Object.entries
    console.log(`${clos[0]}: ${clos[1]}`);
}