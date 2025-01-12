//creating objects in JS.
const student = {
    fullName : "Chowhan Venkatesh",
    marks : 92.6,
    printMarks: function (){
        console.log("marks = ", this.marks); //normal type of object
    },
};
console.log(student);

const employee = {
    calcTax1 (){
        console.log("tax rate is 10%");
    },
    calcTax2 : function (){
        console.log("tax rate is 15%");
    }
};

const vishalPandey = {
    salary : 40000,
};

const vishal = {
    salary : 40000,
    calcTax1 (){
        console.log("tax rate is 20%");
    }
};

vishalPandey.__proto__ = employee; //prototype
vishal.__proto__ = employee;

//creating classes in JS.
class ToyotaCar{
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
};
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

{
    //constructor method()
    class ToyotaCar {
        constructor (brand, mileage) {
            console.log("creating new object");
            this.brand = brand;
            this.mileage = mileage;
        }
        start() {
            console.log("start");
        }
    
        stop() {
            console.log("stop");
        }
    
    };
    
    let fortuner = new ToyotaCar("fortuner", 10);
    console.log(fortuner);
    let lexus = new ToyotaCar("lexus", 12);
    console.log(lexus);
}

//Inheritance in JS.
class Parent {
    hello () {
        console.log("hello");
    }
};

class Child extends Parent {}
let obj = new Child();


class Person {
    eat () {
        console.log("eat");
    }

    sleep () {
        console.log("sleep");
    }
};

class Engineer extends Person {
    work () {
        console.log("works on problems, builds solutions");
    }
};
let venkyobj = new Engineer();



//super keyword
class People {
    constructor (name) {
        this.species = "homo spanies";
        this.name = name;
    }
    eat () {
        console.log("eat");
    }

    sleep () {
        console.log("sleep");
    }

    work () {
        console.log("nothing is possible");
    }
};

class Eng extends People {
    constructor(name) {
        super(name);
        this.myName = "chowhan venkatesh";
    }

    work () {
        console.log("works on problems, builds solutions");
    }
};
let venkatobj = new Eng("venkat");



/*Practice Q1: You are creating a website for your college. 
Create a class User with 2 properties, name & email. 
It also has a method called viewData( ) 
that allows user to view website data*/ 
class websiteWork {
    constructor (fullName, myEmail) {
        this.fullName = fullName;
        this.myEmail = myEmail;
    }

    viewData () {
        console.log("viewData");
    }
};
let user1 = new websiteWork("venkatesh", "abcd@email.com");


/*Practice Q2: Create a new class called Admin which inherits from User. 
Add a new method called editData to Admin that allows it to edit website data */
let DATA = "some secure data ";
class user {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    viewData () {
        console.log("Data = ", DATA);
    }
};

class admin extends user {
    constructor (name, email) {
        super(name, email);
    }
    editData () {
        DATA = "Updated Secure Data by Admin";
    }
};
let admin1 = new admin("vishal pandey", "vishal@gmail.com");


//error handling
let a =10;
let b =15;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
try {
console.log("a+b = ", a+d);
} catch (err) {
    console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
