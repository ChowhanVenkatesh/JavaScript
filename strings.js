// string creation
{
    let str = 'fullStack';
    console.log(str);
    //string length
    console.log(str.length);
    //string index
    console.log(str[6]);
}

{
    let fullName = 'VishalPandey';
    console.log(fullName);
    console.log(fullName.length);
    console.log(fullName[4]);
    console.log(typeof fullName);
}

{
    //template literals in JS
    let specialString = `vishal pandey is good student`;
    console.log(specialString);
    console.log(typeof specialString);
    console.log(specialString.length);
    console.log(specialString[5]);
}

{
    //example of template literals
    let obj = {
        item : 'pen',
        price : 25,
    };
    console.log('the cost of ', obj.item , 'is', obj.price, 'rupees.'); //normal expression
    let output = `the cost of ${obj.item} is ${obj.price} rupees.`; //proffesional expression
    console.log(output);

    let specialStr = `this is my book number ${2+4+1+5}`;
    console.log(specialStr);

    let workName = 'full\nstack\ndevelopment';
    console.log(workName);
    console.log(workName.length); // escape charecters value
}

//string methods
{
    // string uppercase
    let fullName = 'Vishal Pandey';
    console.log(fullName);
    console.log(fullName.toUpperCase()); 
    
    //OR
    let newFullName = fullName.toUpperCase();
    console.log(newFullName);
}