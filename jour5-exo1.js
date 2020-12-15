//calculate

function calculate(num1,operator,num2){
    var number1= parseInt(num1);
    var number2= parseInt(num2);
    if(operator === "+"){
        return number1 + number2;

    } else if(operator === "-"){
        return number1 - number2;

    }else if(operator === "x"){
        return number1 * number2; 

    } else if(operator === "/"){
        return number1 / number2;

    }else if(operator === "%"){
        return number1 % number2;

    }else{
        console.log("error");
    }
}
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));

calculate(5,"+", 5);



//table
function multiply(num){
    var number= parseInt(num);
    for(var i= 1; i<= 10; i++){
        console.log( i +"x"+ number+"="+ number*i)
    }
    return number;
}

console.log(multiply(process.argv[2]));
multiply(2)

