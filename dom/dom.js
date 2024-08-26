const h1 = document.createElement('h1');

h1.setAttribute('id', 'h1Id');
h1.setAttribute('class', 'h1Class');

h1.innerText = "Hello World";

document.body.appendChild(h1);
console.log(h1);