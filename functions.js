{
    //function creation
    function myFunction (){
        console.log("Welcome to Apna College");
        console.log("We are learning JavaScript:)");
    }

    //function call
    myFunction();
}

{
    //function creation with parameters
    function myFunction2 ( msg){ //msg is parameter -> input
        console.log(msg);
    }
    myFunction2("I love javascript:)"); //argument
}

{
    //function of sum of two variables
    function mySum(x,y){
        console.log('first number: ', x);
        console.log('second number: ', y);
        console.log('sum of two numbers: ',x+y);
    }
    mySum(97,5);
}

{
    //example of sum
    function mySum1(a,b){
        c=a+b;
        return c;
    }
    let d=mySum1(45,23);
    console.log(d);
}

{
    //arrow function examples
    function sum(a,b){
        return a+b;
    }
    console.log(sum(90,80));


    //arrow function of sum 
    const arrowSum = (a,b) =>{
        console.log(a+b);
    }
    arrowSum(12,18);


    function mul(a,b){
        return a*b;
    }
    console.log(mul(3,12));

    //arrow function of multiplication
    const arrowMul =(x,y) =>{
        console.log(x*y);
    }
    arrowMul(12,5);
}

{
    /* Practice Q1: Create a function using the “function” keyword that takes a String as an argument &
    returns the number of vowels in the string.*/
    function countVowels (stringName){
        let count =0;
        for (const char of stringName){
            if (char === 'a' || 
                char === 'e' || 
                char === 'i' || 
                char === 'o' || 
                char === 'u'
            ) {
                count++;
            }
        }
        console.log(count);
        return count;
    }
    countVowels('venkatesh');


    /*Practice Q2: Create the arrow function to perform the same task. */
    const countVow =(stringName) => {
        let count =0;
        for (const char of stringName){
            if (char === 'a' || 
                char === 'e' || 
                char === 'i' || 
                char === 'o' || 
                char === 'u'
            ) {
                count++;
            }
        }
        console.log(count);
        return count;
    }
    countVow('venkatesh');
}

{
    //forEach Loop in Arrays
    let arr1 = [1,2,3,4,5];
    arr1.forEach((val) =>{
        console.log(val);
    });

    let arr2 = ['venky', 'venkat', 'venkatesh'];
    arr2.forEach((val) =>{
        console.log(val);
        console.log(val.toUpperCase());
    });
    
    let cities = ['hyderabad', 'mumbai', 'pune', 'banglore', 'delhi'];
    cities.forEach((city,i, cities) =>{
        console.log(city.toUpperCase(), i, cities);
    });

    /*Practice Q1: For a given array of numbers, print the square of each value using the forEach loop. */
    let myArray = [12,4,5,67,89,76];
    myArray.forEach((number) =>{
        console.log(number*number);
    });

    //another method for using callback function in forEach loop
    let myArray2 = [1,2,3,4,5,6,7];
    let calSquare = (number) =>{
        console.log(number**2);
    }
    myArray2.forEach(calSquare);
}

{
    //map method in array
    let numArray = [23,56,12,34,11,13];
    console.log(numArray);
    let newNumArray = numArray.map((value) =>{ //numerical array example
        return value - 2;
    });
    console.log(newNumArray);

    let wordArray = ['venky', 'venkat', 'venkatesh'];
    console.log(wordArray);
    let newWordArray = wordArray.map((value) => { //verbal array example
        return value.toUpperCase();
    });
    console.log(newWordArray);
}

{
    //filter method in array
    let arr = [23,12,45,44,22,32,11,12,56];
    console.log(arr);
    let evenArr = arr.filter((val) => {
        return val % 2 == 0;
    });
    console.log(evenArr);
}

{
    //reduce method in array
    let arr = [1,2,3,4,5,6,7,8];
    console.log(arr);
    const output = arr.reduce((result, current) => {
        return result + current;
    });
    console.log(output);
}

{
    //Practice Q1: We are given array of marks of students. Filter our of the marks of students that scored 90+.
    let marks = [67,89,98,92,91,77,56,64,90,96];
    console.log(marks);
    let toppers = marks.filter((val) =>{
        return val > 90;
    });
    console.log(toppers);

    //Practice Q2: Take a number n as input from user. Create an array of numbers from 1 to n.
    let n = prompt("Enter Your Number: ");
    let arr=[];
    for (let i=1; i<=n; i++){
        arr[i-1]=i;
    }
    console.log(arr);

    //Use the reduce method to calculate sum of all numbers in the array.
    let sum = arr.reduce((res, cur) => {
        return res + cur;
    });
    console.log(sum);

    //Use the reduce method to calculate product of all numbers in the array.
    let product = arr.reduce((res,cur) => {
        return res * cur;
    });
    console.log(product);
}