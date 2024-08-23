var greet = "Hello, ";
var place = "World";

console.log("length of",greet.trim(),"is:",greet.trim().length); // removes any white with .trim() then checks the length of the string with .length() function
console.log(greet.charAt(0)); // access and print the letter at position 0.
console.log(greet.concat("There")); // add the given word to the variable greet(concatenation).
console.log(greet.indexOf("e")); // takes the parameter and search where in the text exist that and return the position accordingly. it returns only the first.
console.log(greet.lastIndexOf("l")); // same as indexOf but the last item as possible
console.log(greet.concat("There").split('e')); // it splits the string and turn into a array of sub-strings according to the given parameter
console.log(greet.toUpperCase()); // make it upercase
console.log(greet.toLowerCase()); // make it lowercase