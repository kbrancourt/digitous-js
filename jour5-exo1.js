//calculate

function calculate(number1,operator,number2){
  
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
        console.log(`${operator} is not managed by out calculator`);
    }
}

//avec switch
/*function calculate2(number1,operator,number2){
  
   switch(operator){
       case "+":{
        return number1 + number2;
       }
        case "-":{
            return number1 - number2;
        }
        case "x":{
            return number1 * number2;
        }
        case "/":{
            return number1 / number2;
        }
         case "%":{
            return number1 % number2;
         }
         default{
             console.log(`${operator} is not managed by out calculator`);
         }
    }
}*/

//process.argv
console.log(process.argv);
var result= console.log(calculate(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4])));
console.log(result);

//s'il manque un parametre
if(process.argv.length !== 5){
    console.log("Error: I'm expecting 3 paramaters");
} else{
    var result=(calculate(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInr(process.argv[4])));
    console.log(result);
}

calculate(5,"+", 5);


