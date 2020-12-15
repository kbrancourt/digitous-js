
// String
// Number
// Boolean
// Condition (if/else ou switch)

var apprenant1 = "John";
var apprenant2 = "Jane";
var apprenant3 = "Franck";

// Array: tableau 
// var <name> = [<value1>, <value2>, ..]
var promo4 = ["John", "Jane", "Franck", 42, true, apprenant1];
console.log(promo4);

var stringValue = "Hello world !";
console.log("Methode de string");
console.log(stringValue);
console.log(stringValue.length);
console.log(stringValue.charAt(3));

var shoppingList = ["Butter", "Egg", "Milk"];
console.log("Methode de tableau");
console.log(shoppingList);
console.log(shoppingList.length);
console.log(shoppingList[2]); // attention on commence a compter à 0 !!!!
console.log(shoppingList.indexOf("Egg"));
console.log(shoppingList.indexOf("Yaourt"));

//console.log(shoppingList.push("Coffee"));
console.log(shoppingList.unshift("Coffee"));
console.log(shoppingList);

/*
console.log(shoppingList.pop());
console.log(shoppingList);

console.log(shoppingList.shift());
console.log(shoppingList);
*/

// substring ()
console.log(shoppingList.slice(1, 2));
console.log(shoppingList.slice(3, 4));
// concatenation en string +

// shoppingList => prends ma boite
// mettre sur le tapis roulant => .<nom du tapis roulant>
// configure ma machine => (parametre(s), séparés par des virgules)
// nouvelle boite

// [ 'Coffee', 'Butter', 'Egg', 'Milk' ]
var list1 = shoppingList.slice(1, 2);
var list2 = shoppingList.slice(3, 4); // >= 3 && < 4
console.log(shoppingList.slice(0, 3)); // >= 0 && < 3
var concatenatedLists = list1.concat(list2);
console.log(concatenatedLists);

console.log(shoppingList.slice(1, 2).concat(shoppingList.slice(3, 4)));

// [ 'Coffee', 'Butter', 'Egg', 'Milk' ]
shoppingList.splice(1, 2, 45);
console.log(shoppingList);

// string
var stringValue = "Hello world !";
var splittedString = stringValue.split(" ");
console.log("String split:", splittedString);
console.log("Join:", splittedString.join("@"));
console.log(`j'ai besoin d'acheter ${shoppingList.join(", ")}`);



//array

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);


//access

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//add and remove

var objects = ["pen", "book", "lamp"];


objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

//order

var numbers = [4 , 10, 8, 12, 6];
 console.log(numbers.reverse());

 var numbers1 = [4 , 10, 8, 12, 6];
console.log(numbers1.sort((a, b) => a - b));

//boucle

var total = 0;
var limit = 10;
 for(var i = 0; i <=limit; i++){
    total= total + i;   // total=+i
                        // total= 0 + 1 (i=1) =1
                        // total= 1 + 2 (i=2) =3
                        // total= 3 + 3 (i=3)= 6
                        // total= 6 + 4 (i=4) =10
                        // total= 10 + 5(i=5)= 15
                        //....
                        // total= 45 + 10(i=10)= 55
    console.log(i);

 }
console.log("result= ", total);


//reverse

var sentence = "Hello Konexio !";
var sentenceInversed= "";
for (var i = sentence.length - 1; i >= 0; i--) {
    sentenceInversed += sentence.charAt(i);
}
console.log(sentenceInversed);


//table de multiplication

var number = 7;
for(var i=0; i<=10; i++){
    var resultat = number * i;
    console.log(number+"x"+i+"="+number*i);
    //console.log(`${i} x ${number} = ${resultat}`);
}


//inverser 
for(var i = 10; i>=0; i--){
    var resultat = number * i;
    console.log(number+"x"+i+"="+number*i);
    //console.log(`${i} x ${number} = ${resultat}`);
}

//bonus 1 (boucle qui part de 0 et s'arrête à 100)
//si i = multiple de 3=>"fizz"
//si i= multiple de 5=>"buzz"
//si i= multiple de 3 et 5=> "fizzbuzz"
//si i=multiple de 7=> affiche rien
// sinon rien

for(var i=0; i <= 100; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");

    }else if(i % 3 === 0){
        console.log("fizz");

    }else if(i % 5 === 0){
        console.log("buzz");

    }else if(i % 7 === 0){
        console.log();

    } else{
        console.log(i);
    }

}
//EXERCICES BOUCLES


//faire une boucle qui lance 10 fois un dé et qui a chaque fois affiche le résultat du dé
//lancer un dé, tirer une valeur aléatoire entre 1 et 6
//additionner le resultat des lancés

var max = 6;
var min = 1;
var resultat = 0;
for (var i = 0; i < 10; i++) {                           // formule pr avoir un nombre aléatoire: Math.floor(Math.random() * (valeur valeur max - min +1) + valeur min)
    var dice = Math.floor(Math.random()  * (max - min + 1) + min); // Math.random(): permet de choisir un chiffre à virgule aléatoire entre 0 et 1
    console.log(dice);                                             //Math.floor: arrondi a l'entier supérieur
    resultat= resultat + dice;
}                                                              
    
console.log("result =", resultat);

//afficher ts le entiers sur 3 entre de 532 à 897

for(var i = 532; i<=897; i = i + 3){
    console.log(i)
}

//afficher ts le entiers de 100 à 0
for(var i= 100; i>=0; i--){
    console.log(i)
}

//afficher ts le entiers pairs de 100 à 0
for(var i= 100; i>=0; i=i-2){
    if(i % 2 === 0)
    console.log(i)
}


//Exercice 1: afficher la somme de ts les entiers allant de 25 à 75
var min = 25;
var max = 75;
var result = 0;
for(var i = 25; i<=75; i++){
    result= result + i;
    console.log(i);
}
console.log(result);

//Exercice 2: afficher la multiplication de tout les entiers allant de 10 à 15
 var result1 = 1;
 for(var i = 10; i<=15; i++){
   result1= result1 *i ;
 }
 console.log(result1);

 // Exercice 3: afficher la somme des entiers pairs allant de 0 à 100 (resultat: 2550)

 var result2 = 0;
 for( var i = 0; i<=100; i+=2){
    result2 = result2 + i;
 }
 console.log(result2)

 // Exercice 4: afficher tout les multiples de 7 entre 0 et 1000 (modifié) 
 for( var i = 0; i<=1000; i++ ){
     if( i % 7 === 0){
         console.log(i);
     }
 }
 //for(var i=0; i <=1000; i+=7){
     //console.log(i); 
 //}


 //BOUCLES WHILE (execute plusieurs fois le mm code tant qu'une condition est vraie)

 var max = 6;
 var min = 1;
 var dice = Math.floor(Math.random() * (max - min + 1) + min);
 console.log(dice);
 //!== signifie différent de 6
while(dice !== 6){
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(dice);
 }

 //afficher les entiers pairs entre 0 et 100
 var i = 0;
 while(i <=100){
    console.log(i);
    i = i + 2;
 }

 //affichier somme des entiers de 25 a 75
var total = 25;
var somme = 0;
while(i<=75){
    console.log(i);
    somme = somme + i;
    i = i + 1;
}

// exo 
var box1 = 72;
var box2 = 10;
while(box1>box2){
    box2=+50;
    console.log(box1 + box2);
}
console.log("j'ai fini");


//exo
var box3 = 5;
var box4 = 6;
var i = 0;
while(i < 3){
    i++;
    console.log(box3 + box4 + i);
    box3 = box3 + box4;
}
console.log(i);

//exo

var box6 = 2;
for(var i = 1; i<2; i = i + 1){
    console.log(box6 + i);
    box6 +=3;
}
console.log(box6);
console.log(i);