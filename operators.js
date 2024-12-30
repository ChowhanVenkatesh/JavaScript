/* Operators */
// Arthmetic Operators: 
{
    //addition
    let a = 5;
    let b = 3;
    console.log("a = ", a, " & b = ", b);
    console.log("a + b = ", a + b);
}

{
    //subtraction
    let a = 8;
    let b = 3;
    console.log("a = ", a, " & b = ", b);
    console.log("a - b = ", a - b);
}

{
    //multiplication
    let a = 6;
    let b = 4;
    console.log("a = ", a, " & b = ", b);
    console.log("a * b = ", a * b);
}

{
    //devision
    let a = 12;
    let b = 3;
    console.log("a = ", a, " & b = ", b);
    console.log("a / b = ", a / b);
}

{
    //madulas
    let a = 15;
    let b = 3;
    console.log("a = ", a, " & b = ", b);
    console.log("a % b = ", a % b);
}

{
    //exponentiation
    let a = 4;
    let b = 3;
    console.log("a = ", a, " & b = ", b);
    console.log("a ** b = ", a ** b);
}

{
    //post increment
    let a = 5;
    console.log("a = ", a);
    a++;
    console.log("a++ = ", a);
}

{
    //pre increment
    let a = 6;
    console.log("a = ", a);
    ++a;
    console.log("++a = ", a);
}

{
    //post decrement
    let a = 5;
    console.log("a = ", a);
    a--;
    console.log("a-- = ", a);
}

{
    //pre decrement
    let a = 5;
    console.log("a = ", a);
    --a;
    console.log("--a = ", a);
}

//Assignment Operators
{
    //+=
    let a = 5;
    let b = 3;
    a += 4;
    console.log("a = ", a);
}

{
    //-=
    let a = 5;
    let b = 7;
    console.log("b = ", b);
    b -= 3;
    console.log("b = ", b);
}

{
    //*=
    let a = 4;
    let b = 2;
    console.log("a = ", a);
    a *= 3;
    console.log("a = ", a);
}

{
    ///=
    let a = 15;
    console.log("a = ", a);
    a /= 3;
    console.log("a = ", a);
}

{
    //%=
    let a = 24;
    console.log("a = ", a);
    a %= 2;
    console.log("a = ", a);
}

{
    //**=
    let a = 5;
    let b = 3;
    console.log("a = ", a);
    a **= 4;
    console.log("a = ", a);
}

//Comparison Operators:
{
    //>
    let a = 5;
    let b = 4;
    console.log("a = ", a, "b = ", b);
    let c = a > b;
    console.log(" a > b = ", c);
}

{
    //>=
    let a = 12;
    let b = 15;
    console.log("a = ", a, "b = ", b);
    let c = a >= b;
    console.log(" a >= b = ", c);
}

{
    //<
    let a = 3;
    let b = 2;
    console.log("a = ", a, "b = ", b);
    let c = a < b;
    console.log(" a < b = ", c);
}

{
    //<=
    let a = 12;
    let b = 14;
    console.log("a = ", a, "b = ", b);
    let c = a <= b;
    console.log(" a <= b = ", c);
}

{
    //==
    let a = 12;
    let b = "12";
    console.log("a = ", a, "b = ", b);
    let c = a == b;
    console.log(" a == b = ", c);
}

{
    //!=
    let a = 12;
    let b = 11;
    console.log("a = ", a, "b = ", b);
    let c = a != b;
    console.log(" a != b = ", c);
}

{
    //===
    let a = 11;
    let b = "11";
    console.log("a = ", a, "b = ", b);
    let c = a === b;
    console.log(" a === b = ", c);
}

{
    //!==
    let a = 12;
    let b = "12";
    console.log("a = ", a, "b = ", b);
    let c = a !== b;
    console.log(" a !== b = ", c);
}

//Logical Operators:
{
    //AND &&
    let a = 12;
    let b = 13;
    console.log("a = ", a, "b = ", b);
    let cond1 = a < b ;
    let cond2 = a >= b;
    console.log(" a<b && a>=b = ", cond1 && cond2);
}

{
    //OR || 
    let a = 11;
    let b = 13;
    console.log("a = ", a, "b = ", b);
    let cond1 = a < b;
    let cond2 = a == b;
    console.log(" a<b or a==b = ", cond1 || cond2);
}

{
    //NOT !
    let a = 14;
    let b = 12;
    console.log("a = ", a, "b = ", b);
    let c = a>b ;
    console.log(" !(a>b) = ", !(a>b));
}

{
    //ternary operators:
    let age = 23;
    console.log("age = ", age);
    let results = age >= 18 ? "Adult" : "Not Adult" ;
    console.log(results);
}