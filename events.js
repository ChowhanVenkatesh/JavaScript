let btn1 = document.querySelector("#btn1");

//btn1.onclick = () => {
  //  console.log("btn1 was clicked.");
    //let a = 24; //creating onclick event 
    //a++;
    //console.log(a);
//};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside the div box"); //creating mouseover event
};


//event object example
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

//eventlisteners example
let btn2 =document.querySelector("#btn2"); //adding eventlisteners. 

btn2.addEventListener("click", (e) => {
    console.log("button2.1");
});

btn2.addEventListener("click", (e) => {
    console.log("button2.2");
});

const handler = (e) => {
    console.log("button2.3");
}; 

btn2.addEventListener("click", handler);

btn2.addEventListener("click", (e) => {
    console.log("button2.4");
});

btn2.removeEventListener("click", handler); //removing evenlisteners.


    /*Practice Q: Create a toggle button that changes the screen to dark-mode when clicked & light-mode
    when clicked again */
    let modeBtn = document.querySelector("#mode");
    let body = document.querySelector("body");
    let currMode = "light";

    modeBtn.addEventListener("click", () => {
        if (currMode === "light") {
            currMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            currMode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }

        console.log(currMode);
    });
