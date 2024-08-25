/*
    3 types of OOP:
        - Encapsulation - Have a class(super-class) and re-use them within other classes exting super-class multiple times;
        - Polymorphism - Write your code in a way that will make it more generalized;
        - Abstraction - Hide your methods so the user do not have to see how it works;
*/

// Polymorphism
class User {
    printName() {
        console.log("---Username---");
        console.log("---User---");
    }
}

class ChildUser extends User {
    printName() {
        super.printName(); // you excute all the functions inside User super-class
        console.log("child user");
    }
}

class CousinUser extends User {
    printName() {
        console.log("cousin name");
    }
}

var childUser = new ChildUser(); // you have to use 'new' so you can access its methods.
var cousinUser = new CousinUser();

childUser.printName();
cousinUser.printName();