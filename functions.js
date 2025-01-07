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
