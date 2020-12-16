var {multiply, addition} = require("./table-utils");

//table

function multiply(number){
    for(var i= 1; i<= 10; i++){
        console.log( i +"x"+ number+"="+ number*i);
    }
}

var result = multiply(parseInt(process.argv[2]));
console.log(result); 


function addition(number){
    for(var i= 1; i<= 10; i++){
        console.log( i +"+"+ number+"="+ number+i);
    }
}

var result = addition(parseInt(process.argv[2]));
console.log(result); 



if(process.argv.length !== 4){
    console.log("Error");
} else {
    multiply(parseInt(process.argv[2]));

    addition(parseInt(process.argv[3]));
}
