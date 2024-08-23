/* 

    We will focus on 4 types of Errors:
        - SintaxError;
        - ReferenceError;
        - TypeError;
        - RangeError;

*/

// ---------

/* SintaxError is whenever you write an invalid JavaScript code.
   For an instance:
    var a = "sdgshgds"ahjsa;
*/

// ---------

/* ReferenceError is when you try to use a variable that haven't been declared yet.
   For an instance:
    console.log(username);
*/

// ---------

/* TypeError is when we are trying to invoke/call a method from a variable that doesn't support it.
   For an instance:
    console.log("Hello World".round());
*/

// ---------

/* RangeError is when we are giving a value to a function and that value is out of allowed range of acceptable input values.
   For an instance:
    console.log((10).toString(1000));
*/