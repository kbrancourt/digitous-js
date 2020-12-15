//01 - Comptons
//A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200
var i = 50;
while ( i <=200 ){
    console.log(i);
    i = i + 2;
}


//02 - Try again
//Créez une variable `dice` valant null et une variable `count` valant 0
//Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`
//Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6

var dice = null;
var count = 0;
var min = 1;
var max = 6;
while(dice !== 6){
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    count ++;
}
console.log("count = ", count);

//03 - Course
//Créez deux variables `ussainBolt` et `tysonGay` valant 0
//Tant que l'une des deux variables n'a pas dépassé 100 
//Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme
//Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier) 

var min = 1;
var max = 10;

var ussainBolt = 0;
var tysonGay = 0;
while(ussainBolt<100 || tysonGay<100){
    var dice1 = Math.floor(Math.random() * (max - min + 1) + min);
    var dice2 = Math.floor(Math.random() * (max - min + 1) + min);

    ussainBolt += dice1;
    tysonGay+= dice2;
}
console.log(ussainBolt);
console.log(tysonGay);

if(ussainBolt>tysonGay){
    console.log("le vainqueur est Ussain Bolt !");
}else if(tysonGay> ussainBolt){
    console.log("la vainqueur est Tyson Gay !");
} else{
    console.log("égalité !");
}