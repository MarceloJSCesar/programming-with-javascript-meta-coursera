let bird = {
    fly: true,
    name: 'Mary',
    age: '11months old',
};
console.log(bird);

let bird2 = Object.create(bird); // you create a new object based on bird object.
bird2.name = "Hoty";
console.log(bird2);