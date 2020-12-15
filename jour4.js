// object

var cat = {
    name: "Garfield", 
    age: 3,
    isCute: true,
};
console.log(cat);
console.log(cat.age);

if(cat.isCute){
    console.log("So cute !");
}

//combine

var cat2 = {
    name: "Gros Minet", 
    age: 10,
    isCute: false,
}
console.log(cat2);

var cats = [cat, cat2];

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
    var sum = 0;
    for( var i = 1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}
addUp(12);
console.log();

var addUpResult = addUp(12);
console.log(addUpResult);


//time

//num = 1h = 60mn= 3600 secondes
// num = 3700 secondes => 1h  10secondes 
function format(num){

    /*console.log(Math.floor(num / 3600)); // calcul des heures
    console.log( num % 3600); // calcul des minutes et secondes
    console.log(Math.floor( num % 3600 /60));
    console.log(num % 3600 % 60)*/

    //formule avec math
    var hours = Math.floor(num / 3600);
    var restHours = num % 3600; 
    var minutes = Math.floor(restHours / 60); 
    var secondes = restHours %60; 
    console.log(`${hours} : ${minutes} : ${ secondes}`);
}
format(3700);

    //formule sans math
    function formatWhithoutMaths(num){
        var hours= 0; 
        var minutes = 0;
        var seconds = 0;
        for (var i= 0; i< num; i++){
            seconds++; 
            if( seconds === 60){
                minutes ++; 
                seconds = 0; 
            }
            if( minutes === 60){
                hours++;
                minutes = 0;
            }
            if(hours===24){
                days++; 
                hours = 0;
            }
        }
        console.log(`${hours} : ${minutes} : ${ seconds}`);
    }


formatWhithoutMaths(3700); 


// Exercice 6 - Time 
function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    for (var i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

function adamaFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);
formatWithoutMaths(3700);
adamaFormat(3700);


// Bonus 1 - Generate password
function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        var letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}
generatePassword(10);

// Bonus 2 - Jeu de dé
function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;
    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        sum += dice;
    }
    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}