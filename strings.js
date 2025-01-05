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

{
    // string lowercase
    let fullName = 'fullStackDevelopment';
    console.log(fullName);
    console.log(fullName.toLowerCase());
}

{
    //string trim case
    let fullName = '    venkateshChowhan  ';
    console.log(fullName);
    console.log(fullName.trim());
}

{
    //string slice
    let fullName = 'venkateshChowhan';
    console.log(fullName);
    console.log(fullName.slice(0,9));
    console.log(fullName.slice(9));
}

{
    //string concatination
    let firstName = 'Chowhan ';
    let lastName = 'Venkatesh ';
    console.log(firstName);
    console.log(lastName);
    let cond1 = firstName + lastName;
    console.log(cond1);
    console.log(firstName.concat(lastName));
    console.log(cond1.length);
    console.log(typeof cond1);
    console.log(cond1[5]);
}

{
    //string replace
    let fullName = 'VenkateshChowhan';
    console.log(fullName);
    console.log(fullName.replace('t','tt'));

    let myName = 'Yolololololoem';
    console.log(myName);
    console.log(myName.replace('lo','bn'));
    console.log(myName.replaceAll('lo','bn'));
}

{
    //string charAt
    let fullName = 'fullStackDevelopment';
    console.log(fullName);
    console.log(fullName.charAt(3));
}

/* Practice Question 1: Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length */
{
    let fullName = prompt('Enter Your Full Name: ');
    let userName = '@' + fullName + fullName.length;
    console.log(userName);
}