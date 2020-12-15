//Hello World
console.log('Hello World !');

//string
var test = "My name is Kitty";
console.log(test);

//concaténation
var name = "Kitty";
console.log("Nice to meet you " + name);

//string length
var testLength = "I'm very long !";
console.log(testLength.length);

//replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));

//up and down
var basic = "This is cool";
console.log(basic);

console.log(basic.toUpperCase());

console.log(basic.toLowerCase());

//split
var world = "banana";
var letters = world.split('');
console.log(letters);

//template
var age = 38;
var template = `I'm ${age} years old !`;
console.log(template);

//bonus

var quoteOfTheDay= 'Citation d\'aujourd\'hui est: \"Le js c\'est cool"';
console.log(quoteOfTheDay);

var changed = "bonjour";
var newStr = changed.replace(/o/g, 'a');
console.log(newStr);