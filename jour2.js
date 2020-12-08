//number
var integer = 102;
console.log(integer);

var float = 13.9
console.log(float);

//convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified);

//round
var num = 1.5;
var rounded = (Math.round(1.5));
console.log(rounded);

//arithmetique
var test = 12;
var bis = 5;
console.log(test + bis);

var test = 12;
var bis = 5;
console.log(test - bis);

var test = 12;
var bis = 5;
console.log(test * bis);

var test = 12;
var bis = 5;
console.log(test / bis);

var test = 12;
var bis = 5;
console.log(test ** bis);

var test = 12;
var bis = 5;
console.log(test % bis);

//comparaison
var test = 143;
var bis = 219;
console.log( test > bis);

var test = 143;
var bis = 219;
console.log( test >= bis);

var test = 143;
var bis = 219;
console.log( test < bis);

var test = 143;
var bis = 219;
console.log( test <= bis);

var test = 143;
var bis = 219;
console.log( test == bis);

var test = 143;
var bis = 219;
console.log( test != bis);

var test = 143;
var bis = 219;
console.log( test !== bis);


//condition
var limit = 50;
var score = 30;
if (score >=50){
    console.log("OK good!")
} else{
    console.log("Oh noo..")
}

//condition 2
var password = "azerty";
if (password.length>5){
    console.log("The password is secure")
}

//condition 3
var limit = 50;
var score = 51;
var password = "azerty";
if(score>=limit && password.length>5){
    console.log("Everything is good");
} else if (score>=limit || password.length>5){
    console.log("Something is good");
} else if (score<limit && password.length>5){
    console.log("Nothing is good");
}

var limit = 50;
var score = 30;
var password = "azerty";
if(score>=limit && password.length>5){
    console.log("Everything is good");
} else if (score>=limit || password.length>5){
    console.log("Something is good");
} else if (score<limit && password.length>5){
    console.log("Nothing is good");
}

var limit =64;
var score = 55;
var password = "azerty";
if(score>=limit && password.length>5){
    console.log("Everything is good");
} else if (score>=limit || password.length<5){
    console.log("Something is good");
} else{
    console.log("Nothing is good");
}

//bonus
var random = 4;
if(random=6){
    console.log("Yes I win !")
}else{
    console.log("So close...")
}

var random = 0;
if(random===6){
    console.log("Yes I win !")
}else{
    console.log("So close...")
}

//bonus2
var month = "Juanary";

switch (month) {
    case "Juanary":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "Summer":
        console.log("July");
        break;
    case "October":
        console.log("Fall");
        break;
}

var month = "April";
switch (month) {
    case "Juanary":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "Summer":
        console.log("July");
        break;
    case "October":
        console.log("Fall");
        break;
}

var month = "July";
switch (month) {
    case "Juanary":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "July":
        console.log("Summer");
        break;
    case "October":
        console.log("Fall");
        break;
}

var month = "October";
switch (month) {
    case "Juanary":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "July":
        console.log("Summer");
        break;
    case "October":
        console.log("Fall");
        break;
}

//bonus3
var roundedNumber = 3.6;
var float1 = roundedNumber - Math.floor(roundedNumber);
var float2 = roundedNumber - Math.ceil(roundedNumber);


if(float1 < 0.5){
    var roundedNumber = 3.6;
    console.log(Math.floor(roundedNumber));
}else{
    console.log(Math.ceil(roundedNumber));
}

var roundedNumber = 3.3;
var float1 = roundedNumber - Math.floor(roundedNumber);
var float2 = roundedNumber - Math.ceil(roundedNumber);


if(float1 < 0.5){
    var roundedNumber = 3.3;
    console.log(Math.floor(roundedNumber));
}else{
    console.log(Math.ceil(roundedNumber));
}

var roundedNumber = 3.8;
var float1 = roundedNumber - Math.floor(roundedNumber);
var float2 = roundedNumber - Math.ceil(roundedNumber);


if(float1 < 0.5){
    var roundedNumber = 3.8;
    console.log(Math.floor(roundedNumber));
}else{
    console.log(Math.ceil(roundedNumber));
}

var roundedNumber = 12.4;
var float1 = roundedNumber - Math.floor(roundedNumber);
var float2 = roundedNumber - Math.ceil(roundedNumber);


if(float1 < 0.5){
    var roundedNumber = 12.4;
    console.log(Math.floor(roundedNumber));
}else{
    console.log(Math.ceil(roundedNumber));
}

 
