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
for(var i=0; i<=9; i++){
    console.log(number+"x"+i+"="+number*i);
}

