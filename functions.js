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