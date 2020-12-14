// object

var cat = {
    name: "Garfield", 
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);

if(cat.isCute === true){
    console.log("So cute !");
}

//combine

var cat2 = {
    name: "Gros Minet", 
    age: 10,
    isCute: true,
}

var cats ={
    table: [cat, cat2],
}
console.log(cat.age);
console.log(cat2.isCute);