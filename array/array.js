var clothes = [];
clothes.push("swag", "nike", "gucci", "louis v", "prada");

console.log(clothes);
clothes.pop(); // removes the last item in case received no parameter like clothes.pop("swag")
console.log(clothes);

var favColor = {
    color: "white/black",
};
favColor.isActive = true;
favColor.makeInative = function() {
    favColor.isActive = false;
};

console.log(favColor);
favColor.makeInative();
console.log(favColor);