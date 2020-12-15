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
//Comptez combien il y a de multiple de 7 (pensez au modulo !) entre 100 et 1000
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
for(var i = 0; i<20; i++){
    var dice = Math.floor(Math.random() * (max - min + 1 ) + min);
    if(dice >= 5){
        result =  result + dice;
    }
}
console.log(result);

// des boites

var box1 = 12;// +5 // +17
var box2 = 5; //+17 // 30
for (var i = 12; i < 14; i++) {
    box1 = box2;  // box1=5  // box1=17
    console.log(box1 + box2); //console.log(5+5)// console.log(17+17)
    box2 = box1 + i;  //box2=5+12=17 // box2= 17+13=30
}
console.log(box1); // 5 // 17
console.log(box2);//17 // 30
console.log(i);//12 // 13

///exo 5
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);



//encore des boites

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {  
    if (i % 2 === 0) { 
        console.log(box1 + i); //...// console.log(2) //
        box2++; //...// 4 //
    } else {
        console.log(box2 + i); //console.log(4)//...//
        box1--; // - 1 // ...//
    }
}

console.log(box1); //-1  // 2//
console.log(box2); //4 // 4//
console.log(i);//1// 2//

 