const URL = "https://api.txtlocal.com/command";

const factPara = document.querySelector(".fact");
const factButton = document.querySelector("#factMode");

//let promise = fetch(URL);
//console.log(promise);

const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    //console.log(data);
    factPara.innerText = data ;
}

getFacts();

factButton.addEventListener("click", getFacts);