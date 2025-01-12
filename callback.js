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

//Callbacks
function sum (a,b) {
    console.log(a+b);
}

function calculator (a,b, sumCallback) {
    sumCallback(a,b);
}
calculator(5,9,sum);


//setTimeout
function getData (dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

//callback hell
getData(1, () => {
    getData (2, () => {
        getData (3, () => {
            getData (4, () => {

            });
        });
    });
});

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    //resolve = "success";
    reject = "some error";
});