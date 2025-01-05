{
    //array creation
    let heroes = ['ironman', 'hulk', 'thor', 'batman'];
    console.log(heroes);
    console.log(typeof heroes);
    console.log(heroes[2]);
    console.log('\n');

    let marks = [96, 75, 48, 83, 66];
    console.log(marks);
    console.log(typeof marks);
    console.log(marks[3]);
    console.log('\n');

    let info = ['rahul', 43, 'Delhi'];
    console.log(info); //not good practice
    console.log(typeof info);
    console.log('\n');
}

{
    //array item replacement
    let marks = [32, 45, 67, 89,80,45, 12, 56,77,44,39];
    console.log(marks); //old array
    console.log('\n');
    console.log(marks[5]);
    console.log('\n');
    marks[6] = 99;
    newMarks = marks;
    console.log(newMarks); //new array
    console.log('\n');
    let oldMarks = [5,6,8,9,1,21,90,33];
    console.log(oldMarks);
    console.log(marks.concat(oldMarks)); //array concatination
    console.log('\n');
}


//for loop, for-of loop and for-in loop
{
    //looping over an array
    let marks = [34,56,78,90,23,78];
    for (let i =0; i < marks.length; i++){
        console.log(marks[i]); //formal form of array.
    }
    console.log('\n');

    for ( let i of marks){
        console.log(i); // for-of loop
    }

    console.log('\n');

    for (let key in marks){
        console.log('key=',key, ' values= ', marks[key]); //for-in loop
    }

    console.log('\n');

    let superHeroes = ['batman', 'antman', 'thor', 'hulk', 'ironman'];
    for (let i =0; i< superHeroes.length; i++){
        console.log(superHeroes[i]);
    }

    console.log('\n');

    for (let hero of superHeroes){
        console.log(hero);
    }

    console.log('\n');

    for (let key in superHeroes){
        console.log('key=',key, ' values=', superHeroes[key]);
    }

    console.log('\n');
}

{
    //example
    let cities = ['hyderbad', 'bangalore', 'delhi', 'kerala', 'mumbai', 'pune'];
    for (let city of cities){
        console.log(city);
        console.log(city.toUpperCase());
    }

    console.log('\n');

    for (let i =0; i < cities.length; i++){
        console.log(cities[i]);
    }

    console.log('\n');
}

{
    /*Practice Q1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60].
    Find the average marks of the entire class. */
    let marks = [85,97,44,37,76,60];
    console.log('class marks= ', marks);
    let sum =0;
    for (let i of marks){
        sum= sum + i;
    }
    console.log('sum of the entire class marks= ',sum);
    console.log('average of the entire class marks= ', sum/marks.length);

}

{
    /*Practice Q2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
    All items have an offer of 10% OFF on them.
    Change the array to store final price after applying offer. */
    let itemsPrice = [250,645,300,900,50];
    console.log('before offer price: ',itemsPrice);
    for (let i=0; i < itemsPrice.length; i++){
        let offer = itemsPrice[i]/10;
        itemsPrice[i] = itemsPrice[i] - offer;
    }
    console.log('after offer price: ',itemsPrice);
}

{
    //array methods
    let fruits = ['apple','mango', 'orange', 'banana'];
    console.log(fruits);
    fruits.push('greaps'); //push method
    console.log(fruits);

    fruits.pop();
    console.log(fruits); //pop method

    let marks = [12,34,56,78,90];
    console.log(marks);
    console.log(marks.toString()); //toString method

    fruits.unshift('pineapple');
    console.log(fruits); //unshift method

    fruits.shift();
    console.log(fruits); //shift method

    console.log(fruits.slice(1,3)); // slice method

    console.log(marks.splice(2,1,122));
    console.log(marks); //splice method

    let cond1 = fruits.concat(marks);
    console.log(cond1); //concat method

}

{
    /*Practice Q3: Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix” */
    let companiesName = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
    console.log(companiesName);

    //a) remove the first company name from the array.
    console.log(companiesName.shift());
    console.log(companiesName);

    //b) remove uber and add ola in its place.
    console.log(companiesName.splice(1,1,'Ola'));
    console.log(companiesName);

    //c) add amazon at the end.
    companiesName.push('Amazon');
    console.log(companiesName);
}