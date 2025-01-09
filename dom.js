//DOM Manipulation Concepts 

{
    //console.dir(window.document); //window object is global
    //console.dir(document);
    //console.dir(document.body);
    //console.log(document.body);
    //console.dir(document.body.childNodes[1]);
    //console.log(document.body.childNodes[1]);
    //document.body.childNodes[1].innerText = " I love js."; //text change cheyadam.

    //let heading = document.getElementById("mainHeading");
    //console.log(heading); //selecting with id
    //console.dir(heading);

    //let discription = document.getElementsByClassName("discription");
    //console.dir(discription); //selecting with class name
    //console.log(discription);

    //let miniDiscrip = document.getElementsByTagName("p");
    //console.dir(miniDiscrip); //selecting with tag name
    //console.log(miniDiscrip);

    //let queryRelated = document.querySelector("p");
    //console.dir(queryRelated); //querySelector //returns first elements //tag name
    //console.log(queryRelated);

    //let queryRelated1 = document.querySelector("#mainHeading");
    //console.dir(queryRelated1); //querySelector //returns first elements //id name
    //console.log(queryRelated1);

    //let queryRelated2 = document.querySelector(".discription");
    //console.dir(queryRelated2); //querySelector //returns first elements //class name
    //console.log(queryRelated2);

    //let largeQuery = document.querySelectorAll("p");
    //console.dir(largeQuery); //querySelectorAll //returns a node list //tag name
    //console.log(largeQuery);

    //let largeQuery1 = document.querySelectorAll(".discription");
    //console.dir(largeQuery1); //querySelectorAll //returns a node list // class name
    //console.log(largeQuery1);

    //let largeQuery2 = document.querySelectorAll("#mainHeading");
    //console.dir(largeQuery2); //querySelectorAll //returns a node list // id name
    //console.log(largeQuery2);

    //console.dir(document.body.firstChild);
    //console.dir(document.body.lastChild);
    //console.dir(document.body.childNodes);

    //console.dir(document.querySelector("div").children); //accessing children nodes
    //console.dir(document.querySelector("body").children);

    //let fruits = document.querySelector("div");
    //console.dir(fruits); 
    //console.dir(fruits.innerText); //accessing innerText from the div
    //console.dir(fruits.innerHTML); //accessing innerHTML from the div
    //console.dir(fruits.innerText = "chowhan venkatesh"); //changing innerText in div
    //console.dir(fruits.innerHTML = "<div>inner div in main div </div>"); //changing innerHTML in main div

}




//DOM Practice Questions
{
    /*Create a H2 heading element with text - “Hello JavaScript”. 
    Append “from Apna College students” to this text using JS. */

    let h2 = document.querySelector("h2");
    console.dir(h2.innerText);
    h2.innerText = h2.innerText + " from Apna College Students.";
    console.dir(h2);

    /*Create 3 divs with common class name - “box”. 
    Access them & add some unique text to each of them */

    let commonText = document.querySelectorAll("div");
    console.log(commonText);
    let idx = 1;
    for (text of commonText){
        text.innerText = `new value ${idx}`;
        idx++;
    }
    //commonText[0].innerText = "new value 1";
    //commonText[1].innerText = "new value 2";
    //commonText[2].innerText = "new value 3";
}


let div = document.querySelector("div");
console.log(div);

let val = div.getAttribute("id");
console.log(val); //getAttribute Value

let disco = document.querySelector("p");
console.dir(disco);

let valll = disco.getAttribute("class");
console.log(valll);

let discoo = disco.setAttribute("class", "myNewValue");
console.dir(discoo); //setAttribute Value 

let stylingdiv = document.querySelector("div");
console.dir(stylingdiv);
console.log(stylingdiv);

//let stylingbox = stylingdiv.style.backgroundColor = "orange";
let stylingbox = stylingdiv.style.fontFamily = "Roboto";
//let stylingbox = stylingdiv.style.borderRadius = "10px";
//let stylingbox = stylingdiv.style.color = "blue";
console.dir(stylingbox);
console.log(stylingbox); // node styling example

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn.style.backgroundColor ="orange"); //creating new element

let divs = document.querySelector("div");
//divs.append(newBtn);
//divs.prepend(newBtn);
//divs.before(newBtn);
//divs.after(newBtn); //adding new element
newBtn.remove();
console.log(divs);

let newBtn2 = document.createElement("button");
newBtn2.innerText = "Click me! ";
console.log(newBtn2.style.margin = "5px"); //creating new element


let divss = document.querySelector("p");
//divss.append(newBtn2);
//divss.prepend(newBtn2);
//divss.before(newBtn2); //adding new element
//divss.after(newBtn2);
newBtn2.remove(); //delete element
console.log(divss);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>I am New Here! </i>"; //inserting new heading at the top of the page.

document.querySelector("body").prepend(newHeading);

{
    /*Practice Q1: Create a new button element.
    Give it a text “click me”, background color of red & text color of white.
    Insert the button as the first element inside the body tag.*/

    let createButton = document.createElement("button");
    createButton.innerText = "Click me!";
    createButton.style.color = "white";
    createButton.style.backgroundColor = "red";

    document.querySelector("body").prepend(createButton);
}

{
    /*Practice Q2: Create a <p> tag in html, give it a class & some styling.
    Now create a new class in CSS and try to append this class to the <p> element.
    Solve this problem using classList.
    Did you notice, how you overwrite the class name when you add a new one? */
    let newSol = document.querySelector("p");
    console.log(newSol);
    
    //let newMethod = newSol.classList.add("newContent");
    let newMethod = newSol.classList.remove("newContent");
    console.log(newMethod);
}