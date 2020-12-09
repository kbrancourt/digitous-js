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
objects.shift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);