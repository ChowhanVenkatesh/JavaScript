//synchoronous example
console.log("one");
console.log("two");
console.log("three");

//asynchronous example
function hello () {
    console.log("hello");
}

setTimeout(hello, 2000); //timeout; 2s = 2000ms

setTimeout (() => {
    console.log("hello");
}, 4000); //timeout 

console.log("four"); //if we add synchronous statements after asynchronous statement, first synchronous statements executes. 
console.log("five");
console.log("six");