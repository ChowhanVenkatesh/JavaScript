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
//function getData (dataId, getNextData) {
   // setTimeout(() => {
    //    console.log("data", dataId);
    //    if (getNextData){
    //        getNextData();
    //    }
   // }, 2000);
//}

//callback hell
//getData(1, () => {
  //  getData (2, () => {
    //    getData (3, () => {
        //    getData (4, () => {

        //    });
        //});
    //});
//});


//let promise = new Promise((resolve, reject) => {
  //  console.log("I am a promise");
    //resolve = "success";
    //reject = "some error";
//});

//const getPromise = () => {
  //  return new Promise((resolve, reject) => {
    //    console.log("I am a promise");
     //   resolve("success");
        //reject("some error");
    //});
//}

//let promise = getPromise();
//promise.then((res) => {
   // console.log("promise fullfilled", res);
//});

//promise.catch((err) => {
   // console.log("rejected", err);
//});

//promise-chain 
function asyncFunc1 () {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 3000);
    });
}

function asyncFunc2 () {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 6000);
    });
}

console.log("searching data1");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("searching data2");
    let p2 = asyncFunc2((res) => {});
});



//async function
async function myFunc() {
    console.log("Hello World!");
};

myFunc();

function api () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        });
    });
};

async function getWeatherData() {
    await api();
    await api();
};

getWeatherData();

function getData (dataId) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Data 1");
        }, 2000);
    });
}

getData(1, () => {
     getData (2, () => {
         getData (3, () => {
              getData (4, () => {
                console.log("end");  //callbackhell process
              });
          });
      });
  });

getData(1).then((res) => {
    return getData(2);   //promise chain process
}).then((res) => {
    return getData(3);
});


getData();


async function getAllData (){
    await getData(1);   //async-await process
    await getData(2);
};

getAllData();