for (let i = 1; i <= 10; i++) {
    console.log("vishal pandey");
}

//print sum of 1 to 10 
{
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

//taking input from user 
{
    let sum = 0;
    let num = prompt("Enter your last number = ");
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

//while loop syntax
{
    let i = 1;
    while (i <= 15) {
        console.log("i= ", i);
        i++;
    }
}

//do-while loop syntax
{
    let a = 1;
    {
        console.log("a= ", a);
        a++;
    } while (a >= 5);
}

//for-of loop
{
    let str = "fullStackDevelopment";
    for (let i of str) {
        console.log("i= ", i);
    }
}

//example
{
    let str = "vishalPandey";
    let size = 0;
    for (let val of str) {
        console.log("val = ", val);
        size++;
    }
    console.log("string size = ", size);
}

//for-in loop
{
    let student = {
        name: "vishalPandey",
        age: 22,
        cgpa: 9.6,
        isPass: true,

    };

    for (let key in student) {
        console.log("key = ", key);
    }

    for (let key in student) {
        console.log("key = ", key, "value = ", student[key]);
    }
}

//practice question 1: print all numbers from 1 to 100.
{
    for (let n = 1; n <= 100; n++) {
        console.log("num = ", n);
    }
}

//print all even numbers from 1 to 100.
{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log("Even Number = ", i);
        }
    }
}

//print all odd numbers from 1 to 100.
{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            console.log("Odd Number = ", i);
        }
    }
}

//print all numbers from users
{
    let n = prompt("Enter Your Number for Number Printing: ");
    for (let i = 1; i <= n; i++) {
        console.log("Number: ", i);
    }
}

/*practice question 2: Create a game where you start with any random game number. 
Ask the user to keep guessing the game number until the user enters correct value. */
{
    let gameNum = 35;
    let userNum = prompt("Guess the game number: ");
    while ( userNum != gameNum){
        userNum = prompt("You entered wrong number. Guess again: ");
    }
    console.log("Congrats, you entered the right number.");
}
