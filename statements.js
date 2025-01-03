//Conditional Statements
{
    // if statement
    let age = 24;
    if ( age >= 18) {
        console.log("You Can Vote");
    }
}

{
    // if-else statement
    let age = 16;
    if (age >=18) {
        console.log("You Can Vote");
    } else {
        console.log("You Cannot Vote");
    }
}

{
    // else if statement
    let age = 21;
    if (age < 18) {
        console.log("Junior");
    } else if (age > 60) {
        console.log("Senior");
    } else {
        console.log("Middle");
    }
}

//Practice Questions:
{
    let mode = "dark";
    let color;
    if (mode == "light") {
        color = "black";
    }
    console.log(color);
}

{
    let mode = "dark";
    let color;
    if (mode == "pink") {
        color = "orange";
    } else {
        color = "white";
    }
    console.log(color);
}

{
    //even odd number
    let num = 11;
    if (num % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

{
    //taking input from user
    let fullName = prompt("Hello!");
    console.log(fullName);
}

{
    let num = prompt("Enter a number: ");
    if (num % 2 == 0){
        console.log(num, "is multiple of 2");
    } else {
        console.log(num, "is not multiple of 2");
    }
}

{
    //student grading problem
    let score = prompt("Enter Your Score: ");
    if ( score >= 80 && score <= 100) {
        console.log("Grade A");
    } else if ( score >= 70 && score <= 79) {
        console.log("Grade B");
    } else if ( score >= 60 && score <= 69) {
        console.log("Grade C");
    } else if ( score >= 50 && score <= 59) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
}

