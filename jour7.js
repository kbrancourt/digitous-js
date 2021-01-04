// var fs = require("fs");

// //file system
// fs.readFile("jour7.txt" , function(err, data){
//     if (err){
//         console.error(err);
//         return;
//     }
//     console.log(data.toString())
// });

//map double
var array = [1, 2, 3, 4 ,5];

var double = array.map(function(num){
    return num * 2;
});
console.log(double);

//map names

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
var shortNames = longNames.map(function(person){
    var newName = {
        name: person.firstName + " " + person.lastName
    };
    return newName

    // var shortNames = longNames.map((function (element) {
    //     return {
    //         name: element.firstName + " " + element.lastName
    //     }
    // }))
});

console.log(shortNames);

//filters numbers
var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function(element){
    return element.num;
});
console.log(numbers)