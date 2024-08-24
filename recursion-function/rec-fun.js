// loop
for(var i = 0; i <= 4; i++){
    console.log(i);
}

console.log('-----');

// recursion function is an alternative way to run repitive code without the use of loop, however it is most costly when it comes to memory usage
let num1 = 0;
function recFun() {
    console.log(num1);
    num1+=1;
    if(num1 > 4){return;}
    recFun();
}

recFun(); 