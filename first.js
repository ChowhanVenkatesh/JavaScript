console.log("Venkatesh Chowhan");
console.log("Lokya Chowhan");
console.log("Bujji Chowhan");

/* Variables */
fullName = "Vishal Pandey";
age = 21;
price = 50000000.00;
x=null;
y=undefined;
console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);

/* variables with some conditions */
{
    let a = 5;
    console.log(a);
}

{
    let a = 12;
    console.log(a);
}

let b =2;
console.log(b);
 b=5;
console.log(b);

{
const age = 21;
console.log(age);
}

{
    const student = {
        fullName : "Vishal Pandey",
        age : 21,
        cgpa : 9.5,
        isPass : true,
    };
    console.log(student);
    console.log(typeof student);
    console.log(typeof student["fullName"]);
    console.log(student.fullName);
    console.log(student["fullName"]);
    student["cgpa"] = student["cgpa"] + 0.2 ;
    console.log(student);
}

/* Practice Problems */
{
    /* Create a const object called "product" to store information shown in the picture.*/
    const product = {
        title : "Parker Jotter Standard CT Ball Pen (Black)",
        rating : 4,
        price : 270,
        offer : 5,
    };
    console.log(product);
    console.log(typeof product);
}

{
    /* Create a const object called "profile" to store information shown in the picture.*/
    const profile = {
        fullName : "Shradha Khapra",
        post : 195,
        isFollow : true,
        followers : 56900000,
        following : 4,
        bioTitle : "Apna College | Ex-Microsoft, DRDO",
        bioDescription : "To educate someone is the highest privilage",
    };
    console.log(profile);
    console.log(typeof profile);
}