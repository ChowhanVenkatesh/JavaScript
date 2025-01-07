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

{
    let divs = document.querySelector("p");
    console.log(divs);

    let id = divs.getAttribute("id");
    console.log(id);
}

let divsss =document.querySelector("h3");
console.log(divsss);

let id = divsss.setAttribute("id", "newRemark");
console.log(id);
