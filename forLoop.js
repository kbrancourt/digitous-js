//somme des carrés
//Calculez la somme des carrés des nombres de 5 à 10
//Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25
//Resultat attendu: 355

var somme = 0;
for(var i = 5; i <= 10; i ++){
    var square = i * i;
    somme = somme + square;
}
console.log(somme);

//  Comptons
//Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
//Résultat attendu: 128
var somme = 0;
for(var i= 100; i<=1000; i++){
    if( i % 7 === 0){
        somme = somme + 1;
    }
}
console.log(somme);

// Chanceux
var min = 1;
var max = 6;
var result = 0;
for(var i = 0; i<=20; i++){
    var dice = Math.floor(Math.random() * (max - min + 1 ) + 1);
    result =  result + dice;
}
console.log(result);
