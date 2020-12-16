//créer un fichier table-utils
function multiply(number){
    for(var i= 1; i<= 10; i++){
        console.log( i +"x"+ number+"="+ number*i);
    }
}


function addition(number){
    for(var i= 1; i<= 10; i++){
        console.log( i +"+"+ number+"="+ number+i);
    }
}

module.exports = {
    multiply,
    addition,
}