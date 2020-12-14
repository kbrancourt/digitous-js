// object

var cat = {
    name: "Garfield", 
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);

if(cat.isCute === true){
    console.log("So cute !");
}

//combine

var cat2 = {
    name: "Gros Minet", 
    age: 10,
    isCute: true,
}

var cats ={
    table: [cat, cat2],
}
console.log(cat.age);
console.log(cat2.isCute);

//even

function checkIfEven(num){
    if(num % 2 === 0){
        console.log("even"); 
    } else{
        console.log("odd");
    }
    
}
console.log();
checkIfEven(6);

console.log();
checkIfEven(3);


//compare

function compare(num1, num2){
    if(num1 > num2){
        console.log("num1 is bigger");
    } else if( num1 < num2){
        console.log("num2 is bigger");
    }else if( num1 = num2){
        console.log("both are the same");
    }
}

compare( 5, 2);
compare( 2, 5); 
compare( 6, 6);

// add up

function addUp(num){
    for( i )
}