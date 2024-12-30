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