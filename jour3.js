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
for (var i = 1; i <= limit; i++){
    total += i;
    console.log("total=", total);
}
console.log("result="+ total);


//reverse

var sentence = "Hello Konexio !";
for(var sentence = 0; sentence<=15; sentence--){
    console.log(sentence);
}